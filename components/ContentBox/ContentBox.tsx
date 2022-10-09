import { useEffect, useState } from "react"
import {
  BodypartProps,
  ContentBoxProps,
  Exercise,
  Toggle,
} from "../../interfaces/exercises/exercises.interface"
import RandomStretch from "./RandomStretch"
import SelectionBox from "./SelectionBox"

function ContentBox({ bodyparts, exercises }: ContentBoxProps) {
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([])
  const [toggleScreen, setToggleScreen] = useState<Toggle>("select")
  const [filteredExercises, setFilteredExercises] = useState(null)
  const [selectedExercise, setSelectedExercise] = useState(null)

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
    console.log(selectedBodyParts)
    const matchingExercises: Exercise[] = []

    exercises.filter((exercise: Exercise) => {
      exercise.attributes.bodyparts.data.forEach((exerciseBodypart) => {
        selectedBodyParts.forEach((bodypart) => {
          console.log("For each 2", bodypart)
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

  useEffect(() => {
    if (filteredExercises) {
      selectRandomExercise(filteredExercises)
      console.log(filteredExercises)
    }
  }, [filteredExercises])

  useEffect(() => {
    if (selectedExercise) {
      console.log(selectedExercise)
      setToggleScreen("display")
    }
  }, [selectedExercise])

  const selectRandomExercise = (exercises) => {
    const result = exercises[Math.floor(Math.random() * exercises.length)]
    setSelectedExercise(result)
  }

  return (
    <div className="flex justify-center pb-10 bg-purple-200">
      <div
        className=" bg-neutral-100 w-11/12 rounded-lg -mt-20 p-5 scroll-mt-20"
        id="randomBox">
        {toggleScreen === "select" && (
          <SelectionBox
            bodyparts={bodyparts}
            handleSelectedBodyParts={handleSelectedBodyParts}
            selectedBodyParts={selectedBodyParts}
            setSelectedBodyParts={setSelectedBodyParts}
            handleGo={handleGo}
          />
        )}
        {toggleScreen === "display" && selectedExercise && (
          <RandomStretch exercise={selectedExercise} />
        )}
      </div>
      {/* <button onClick={() => selectRandomExercise(filteredExercises)}>
        Test
      </button> */}
    </div>
  )
}

export default ContentBox
