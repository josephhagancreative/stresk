import React, { useState } from "react"
import { ChipProps } from "../../interfaces/exercises.interface"

function Chip({ attribute, handleSelectedBodyParts }: ChipProps) {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = (bodypart: string) => {
    setIsSelected(!isSelected)
    handleSelectedBodyParts(bodypart)
  }
  return (
    <span
      onClick={() => handleClick(attribute)}
      className={`px-4 py-2 rounded-full font-title  ${
        isSelected ? "bg-purple-500" : "bg-purple-300"
      }  ${
        isSelected ? "text-neutral-100" : "text-neutral-800"
      } font-semibold  w-max cursor-pointer  transition duration-300 ease md:hover:bg-purple-400 active:bg-purple-500 `}>
      {attribute}
    </span>
  )
}

export default Chip
