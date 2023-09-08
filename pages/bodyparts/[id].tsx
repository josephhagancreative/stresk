import { GetStaticProps } from "next"
import { Bodypart, Exercise } from "../../interfaces/exercises.interface"
import Card from "../../components/Reusables/Card"

function Bodypart({ exercises, name }: any) {
  return (
    <>
      <section className="flex flex-col justify-start pt-20 min-h-screen bg-gradient-to-r from-purplebg to-blackbg">
        <div className="mb-10 px-4">
          {name && (
            <p className="text-3xl font-semibold text-white">
              Stretches for {name}
            </p>
          )}
        </div>
        <div className="flex justify-start items-center text-center px-4 relative overflow-x-scroll scrollbar-hide">
          <div className=" flex flex-row gap-5 scrollbar-hide overscroll-contain">
            {exercises &&
              exercises.map((exercise: Exercise) => (
                <Card key={exercise.id} exercise={exercise} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://stresk-strapi-cloudinary-ii.onrender.com/api/bodyparts/"
  )
  const data = await res.json()

  const paths = data.data.map((bodypart: Bodypart) => {
    return {
      params: {
        id: bodypart.id.toString(),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bodypartId = params!.id

  const bodypartRes = await fetch(
    `https://stresk-strapi-cloudinary-ii.onrender.com/api/bodyparts/${
      params!.id
    }`
  )
  const bodypart = await bodypartRes.json()

  const exercisesRes = await fetch(
    "https://stresk-strapi-cloudinary-ii.onrender.com/api/exercises?populate=*"
  )
  const exercisesUnfiltered = await exercisesRes.json()

  const data = exercisesUnfiltered.data
  const array: Exercise[] = []

  data.forEach((exercise: Exercise) => {
    exercise.attributes.bodyparts.data.forEach((bodypart) => {
      if (bodypart.id == Number(bodypartId)) {
        array.push(exercise)
      }
    })
  })

  return {
    props: {
      exercises: array,
      name: bodypart.data.attributes.bodypart,
    },
    revalidate: 60,
  }
}

export default Bodypart
