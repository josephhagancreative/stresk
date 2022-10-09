import { useState } from "react"
import {
  Bodypart,
  BodypartProps,
} from "../interfaces/exercises/exercises.interface"
import Chip from "./Chip"

function RandomStretchBox({ bodyparts }: BodypartProps) {
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([])

  const handleSelectedBodyParts = (bodypart: string) => {
    if (selectedBodyParts.includes(bodypart)) {
      setSelectedBodyParts(
        selectedBodyParts.filter((value) => !value.includes(bodypart))
      )
    } else {
      setSelectedBodyParts([...selectedBodyParts, bodypart])
    }

    console.log(bodypart)
  }
  const handleGo = () => {
    console.log(selectedBodyParts)
  }
  return (
    <div className="flex justify-center pb-10 bg-purple-200">
      <div
        className=" bg-neutral-100 w-11/12 rounded-lg -mt-20 p-5 scroll-mt-20"
        id="randomBox">
        <h2 className="font-title font-bold text-center text-3xl mt-5">
          Let's Stretch
        </h2>
        <p className="font-bold text-center text-lg mt-5 ">
          Select body parts:
        </p>
        <div className="flex flex-wrap gap-2 mt-5 px-3 justify-center">
          {bodyparts &&
            bodyparts.map((bodypart: Bodypart) => (
              <Chip
                key={bodypart.id}
                attribute={bodypart.attributes.bodypart}
                handleSelectedBodyParts={handleSelectedBodyParts}
              />
            ))}
          {selectedBodyParts.length == 0 && (
            <p className="text-neutral-500 text-sm text-center">
              By default all bodyparts will be included
            </p>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleGo}
            className="rounded-full bg-purple-800 text-neutral-100 
          text-xl font-bold font-title cursor-pointer  transition duration-300 ease p-5 hover:bg-purple-400 hover:text-neutral-900">
            GO
          </button>
        </div>
      </div>
    </div>
  )
}

export default RandomStretchBox
