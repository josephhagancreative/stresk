import React from "react"
import { TimeButtonProps } from "../../interfaces/exercises.interface"

function TimeButton({ duration, startTimer }: TimeButtonProps) {
  return (
    <button
      className="bg-gradient-to-b from-purple-400 to-purple-600 text-neutral-100 font-bold font-title py-3 px-4 rounded-full md:hover:bg-purple-400 "
      onClick={() => startTimer(duration)}>
      {duration}
    </button>
  )
}

export default TimeButton
