import Image from "next/image"
import React from "react"
import { RandomStretchProps } from "../../interfaces/exercises/exercises.interface"
import ReactMarkdown from "react-markdown"
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid"
import Countdown from "../Reusables/Countdown"

function RandomStretch({
  exercise,
  handleGo,
  resetSelectedBodyParts,
}: RandomStretchProps) {
  const { name, slug, details, excerpt } = exercise.attributes
  const imgUrl = exercise.attributes.image.data.attributes.formats.large.url
  const bodyparts = exercise.attributes.bodyparts.data
  return (
    <div>
      <div className="flex justify-between items-center">
        <button className="" onClick={resetSelectedBodyParts}>
          <ArrowLeftIcon className="h-6 w-6  inline text-neutral-800" />
        </button>
        <h2 className="font-title font-bold text-center text-2xl px-2">
          {name}
        </h2>
        <button className="">
          <ArrowPathIcon
            className="h-6 w-6  inline text-neutral-800"
            onClick={handleGo}
          />
        </button>
      </div>
      <div className="mt-5">
        <Image
          className="rounded-md"
          src={imgUrl}
          height={500}
          width={800}
          objectFit="cover"
        />
      </div>
      <div className="flex mt-1 justify-center">
        <Countdown />
      </div>

      <div className=" text-left text-sm mt-5 bg-purple-100 rounded-md p-5 text-neutral-800 leading-relaxed">
        <h3 className="font-bold mb-2">Instructions:</h3>
        <ReactMarkdown>{details}</ReactMarkdown>
      </div>
      <div className="flex flex-wrap gap-2 mt-5 px-3 justify-center"></div>

      <div className="flex justify-center">
        <button
          onClick={handleGo}
          className="rounded-full flex justify-center bg-purple-500 text-neutral-100 
          text-xl font-bold font-title cursor-pointer  transition duration-300 ease p-5 md:hover:bg-purple-400hover:text-neutral-900">
          <a href="#randomBox">
            Again
            <ArrowPathIcon className="h-6 w-6 inline ml-2  text-neutral-100" />
          </a>
        </button>
      </div>
    </div>
  )
}

export default RandomStretch
