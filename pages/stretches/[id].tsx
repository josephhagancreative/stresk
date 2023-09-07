import { GetStaticProps } from "next"
import DisplayStretch from "../../components/ContentBox/DisplayStretch"
import { Exercise, ExerciseProps } from "../../interfaces/exercises.interface"

function Exercise({ exercise }: ExerciseProps) {
  return (
    <div className="relative mt-10 ">
      <DisplayStretch exercise={exercise} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://stresk-strapi-cloudinary-ii.onrender.com/api/exercises"
  )
  const exercises = await res.json()

  const paths = exercises.data.map((exercise: Exercise) => ({
    params: { id: exercise.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const exerciseRes = await fetch(
    `https://stresk-strapi-cloudinary-ii.onrender.com/api/exercises/${
      params!.id
    }?populate=*`
  )
  const exercise = await exerciseRes.json()

  return {
    props: {
      exercise,
    },
    revalidate: 60,
  }
}

export default Exercise
