import { useEffect, useState } from "react"
import {
  ContentBoxProps,
  Exercise,
  Toggle,
} from "../../interfaces/exercises.interface"
import Spinner from "../Reusables/Spinner"
import SelectionBox from "./SelectionBox"
import DisplayStretch from "../Reusables/DisplayStretch"
import { ArrowPathIcon } from "@heroicons/react/24/solid"

function ContentBox({ bodyparts, exercises }: ContentBoxProps) {
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([])
  const [toggleScreen, setToggleScreen] = useState<Toggle>("select")
  const [filteredExercises, setFilteredExercises] = useState<null | Exercise[]>(
    null
  )
  const [selectedExercise, setSelectedExercise] = useState<null | Exercise>(
    null
  )
  const [isLoading, setIsLoading] = useState(false)

  const icon = (
    <ArrowPathIcon className="h-6 w-6 inline ml-2  text-neutral-100" />
  )

  const handleSelectedBodyParts = (bodypart: string) => {
    if (selectedBodyParts.includes(bodypart)) {
      setSelectedBodyParts(
        selectedBodyParts.filter((value) => !value.includes(bodypart))
      )
    } else {
      setSelectedBodyParts([...selectedBodyParts, bodypart])
    }
  }
  const handleGo = () => {
    const matchingExercises: Exercise[] = []
    exercises.filter((exercise: Exercise) => {
      exercise.attributes.bodyparts.data.forEach((exerciseBodypart) => {
        selectedBodyParts.forEach((bodypart) => {
          if (exerciseBodypart.attributes.bodypart === bodypart) {
            if (matchingExercises.includes(exercise)) {
              return
            } else {
              matchingExercises.push(exercise)
              return
            }
          }
        })
      })
    })
    setFilteredExercises(matchingExercises)
  }

  // Triggered when filtered exercises is update
  useEffect(() => {
    if (filteredExercises) {
      selectRandomExercise(filteredExercises)
    }
  }, [filteredExercises, selectedExercise])

  // Triggered when selected exercise is updated
  useEffect(() => {
    if (selectedExercise) {
      runLoadingAnimation()
      setToggleScreen("display")
    }
  }, [selectedExercise, filteredExercises])

  const selectRandomExercise = (exercises: Exercise[]) => {
    const result = exercises[Math.floor(Math.random() * exercises.length)]
    setSelectedExercise(result)
  }

  const resetSelectedBodyParts = () => {
    setToggleScreen("select")
    setSelectedBodyParts([])
  }

  const runLoadingAnimation = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  if (isLoading) {
    return (
      <div
        className="flex justify-center content-center pb-14 bg-purple-200
      h-96">
        <div
          className="flex justify-center items-center bg-neutral-100 w-11/12 rounded-lg -mt-20 p-5 scroll-mt-20"
          id="randomBox">
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center pb-14 bg-purple-100">
      <div
        className=" bg-neutral-100 w-11/12 rounded-lg -mt-20 p-5 scroll-mt-20"
        id="randomBox">
        {toggleScreen === "select" && (
          <SelectionBox
            bodyparts={bodyparts}
            handleSelectedBodyParts={handleSelectedBodyParts}
            selectedBodyParts={selectedBodyParts}
            handleGo={handleGo}
          />
        )}
        {toggleScreen === "display" && selectedExercise && (
          <DisplayStretch
            exercise={selectedExercise}
            backArrowOnClick={resetSelectedBodyParts}
            bigButtonOnClick={handleGo}
            buttonIcon={icon}
            buttonText="Again"
          />
        )}
      </div>
    </div>
  )
}

export default ContentBox
