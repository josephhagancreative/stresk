import React from "react"
import { ChipProps } from "../interfaces/exercises/exercises.interface"

function Chip({ attribute }: ChipProps) {
  return (
    <span className="px-4 py-2 rounded-full font-title text-black bg-purple-200 font-semibold  w-max cursor-pointer  transition duration-300 ease hover:bg-purple-400 ">
      {attribute}
    </span>
  )
}

export default Chip
