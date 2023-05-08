import React, { useState } from "react"
import { ExerciseDropdownProps } from "../interfaces/components/components.interface"
import Card from "./Reusables/Card"

interface BodyPartChangeEvent {
  target: {
    value: string
  }
}

function SuggestedStretches({ bodyparts, exercises }: ExerciseDropdownProps) {
  const [selectedBodypart, setSelectedBodypart] = useState("")

  const handleBodyPartChange = (event: BodyPartChangeEvent) => {
    setSelectedBodypart(event.target.value)
  }

  const filteredExercises = exercises.filter((exercise) => {
    const exerciseBodyParts = exercise.attributes.bodyparts.data.map(
      (bodypart) => bodypart.attributes.bodypart
    )
    return exerciseBodyParts.includes(selectedBodypart)
  })

  return (
    <div className="bg-gradient-to-b from-purplebg to-blackbg py-10 text-neutral-200 rounded-t-lg -mt-2">
      <h2 className="font-bold font-title text-xl text-center">
        Find a specific stretch from our lists
      </h2>
      <div className="flex justify-center py-3">
        <select
          className="py-3 px-4 pr-9 block border-gray-200 rounded-full text-sm focus:border-purple-500 focus:ring-purple-500 bg-purple-200 0 text-gray-800"
          value={selectedBodypart}
          onChange={handleBodyPartChange}>
          <option className="text-gray-400" value="">
            Select a body part
          </option>
          {bodyparts.map((bodypart) => (
            <option
              key={bodypart.attributes.bodypart}
              value={bodypart.attributes.bodypart}>
              {bodypart.attributes.bodypart}
            </option>
          ))}
        </select>
      </div>

      {selectedBodypart && (
        <div>
          <h3 className="text-center text-xl  font-semibold">
            Exercises for{" "}
            <span className="text-purple-200">{selectedBodypart}</span>:
          </h3>
          <ul>
            <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-4 scrollbar-hide">
              <div className="grid grid-flow-col gap-1 ">
                {filteredExercises.map((exercise) => (
                  <Card key={exercise.id} exercise={exercise} />
                ))}
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SuggestedStretches
