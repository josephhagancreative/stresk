import React from "react"
import {
  Bodypart,
  BodypartProps,
} from "../../interfaces/exercises/exercises.interface"
import Chip from "../Reusables/Chip"

function SelectionBox({
  bodyparts,
  selectedBodyParts,
  handleSelectedBodyParts,
  handleGo,
}: BodypartProps) {
  return (
    <div>
      <h2 className="font-title font-bold text-center text-3xl mt-5">
        Let&#39;s Stretch
      </h2>
      <p className="font-bold text-center text-lg mt-5 ">Select body parts:</p>
      <div className="flex flex-wrap gap-2 mt-5 px-3 justify-center">
        {bodyparts &&
          bodyparts.map((bodypart: Bodypart) => (
            <Chip
              key={bodypart.id}
              attribute={bodypart.attributes.bodypart}
              handleSelectedBodyParts={handleSelectedBodyParts}
            />
          ))}
      </div>
      {selectedBodyParts.length == 0 && (
        <p className="text-neutral-500 text-sm text-center mt-5">
          Please select at least 1 body part
        </p>
      )}
      <div className="flex justify-center mt-5">
        <button
          onClick={handleGo}
          className="rounded-full bg-purple-800 text-neutral-100 
          text-xl font-bold font-title cursor-pointer  transition duration-300 ease p-5 hover:bg-purple-400 hover:text-neutral-900 disabled:bg-neutral-400"
          disabled={selectedBodyParts.length == 0}>
          GO
        </button>
      </div>
    </div>
  )
}

export default SelectionBox
