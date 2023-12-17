import { GetStaticProps } from "next"
import {
  Bodypart,
  Exercise,
  ExerciseObjProps,
} from "../../interfaces/exercises.interface"
import Card from "../../components/Reusables/Card"
import OutlineButton from "../../components/Reusables/OutlineButton"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router"

function StretchesPage({ exerciseObjArr }: any) {
  const icon = <ArrowLeftIcon className="h-6 w-6  inline text-white" />

  const router = useRouter()

  const handleClick = () => {
    router.back()
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-purplebg to-blackbg">
      <section className="flex flex-col justify-start pt-20  mx-auto md:max-w-6xl">
        <div className=" flex flex-col scrollbar-hide overscroll-contain">
          {exerciseObjArr &&
            exerciseObjArr.map(
              (exerciseObj: ExerciseObjProps, index: number) => (
                <div className="justify-start py-2" key={index}>
                  <h2 className="text-3xl p-4 text-left font-semibold text-white">
                    {exerciseObj.name}&nbsp;
                    <span className="text-gray-300 text-xl">
                      ({exerciseObj.bodypartExercises.length})
                    </span>
                  </h2>
                  <div className="flex justify-start items-center relative overflow-y-visible overflow-x-scroll scrollbar-hide py-6">
                    <div className="flex flex-row gap-5 px-4 scrollbar-hide overscroll-contain md:flex-wrap">
                      {exerciseObj.bodypartExercises.map(
                        (exercise: Exercise) => (
                          <Card exercise={exercise} key={exercise.id} />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>

        <div className="px-4 py-5">
          <OutlineButton icon={icon} text="Back" onClick={handleClick} />
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [exercisesRes, bodypartsRes] = await Promise.all([
    fetch(
      "https://stresk-strapi-cloudinary-ii.onrender.com/api/exercises?populate=*"
    ),
    fetch("https://stresk-strapi-cloudinary-ii.onrender.com/api/bodyparts"),
  ])

  const [exercises, bodyparts] = await Promise.all([
    exercisesRes.json(),
    bodypartsRes.json(),
  ])

  const exerciseObjArr: {
    name: string
    bodypartExercises: any[]
  }[] = []

  bodyparts.data.forEach((bodypart: Bodypart) => {
    const bodypartObj: ExerciseObjProps = {
      name: bodypart.attributes.bodypart,
      bodypartExercises: [],
    }

    exercises.data.map((exercise: Exercise) => {
      exercise.attributes.bodyparts.data.forEach((bodypart) => {
        if (bodypart.attributes.bodypart === bodypartObj.name) {
          bodypartObj.bodypartExercises.push(exercise)
        }
      })
    })
    exerciseObjArr.push(bodypartObj)
  })

  return {
    props: {
      exerciseObjArr,
    },
  }
}

export default StretchesPage
