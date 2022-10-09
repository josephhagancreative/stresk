import Image from "next/image"
import React from "react"
import {
  Bodypart,
  BodypartProps,
  Exercise,
  ExerciseProps,
} from "../../interfaces/exercises/exercises.interface"
import Card from "../Reusables/Card"
import Chip from "../Reusables/Chip"

function RandomStretch({ exercise }: ExerciseProps) {
  console.log(exercise)
  const { name, slug, details, excerpt } = exercise.attributes
  const imgUrl = `http://localhost:8888${exercise.attributes.image.data.attributes.url}`
  const bodyparts = exercise.attributes.bodyparts.data
  return (
    <div>
      <h2 className="font-title font-bold text-center text-3xl mt-5">{name}</h2>
      <div className="mt-10">
        <Image
          className="rounded-md"
          src={imgUrl}
          height={500}
          width={800}
          objectFit="cover"
        />
      </div>

      <p className=" text-left text-lg mt-5 ">{details}</p>
      <div className="flex flex-wrap gap-2 mt-5 px-3 justify-center"></div>

      <div className="flex justify-center mt-5">
        <button
          className="rounded-full bg-purple-800 text-neutral-100 
          text-xl font-bold font-title cursor-pointer  transition duration-300 ease p-5 hover:bg-purple-400 hover:text-neutral-900">
          GO
        </button>
      </div>
    </div>
  )
}

export default RandomStretch
