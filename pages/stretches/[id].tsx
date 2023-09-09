import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import DisplayStretch from "../../components/Reusables/DisplayStretch"
import { Exercise, ExerciseProps } from "../../interfaces/exercises.interface"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

function Exercise({ exercise }: ExerciseProps) {
  const router = useRouter()
  const exerciseData = exercise.data

  const icon = (
    <ArrowLeftIcon className="h-6 w-6 inline ml-2  text-neutral-100" />
  )

  const onBackClick = () => {
    router.back()
  }

  return (
    <div className="relative mt-10 p-5 ">
      <DisplayStretch
        exercise={exerciseData}
        backArrowOnClick={onBackClick}
        bigButtonOnClick={onBackClick}
        buttonIcon={icon}
        buttonText="Back"
      />
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
