import ReactMarkdown from "react-markdown"
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  StarIcon,
} from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import Image from "next/image"
import Countdown from "../Reusables/Countdown"
import { ExerciseProps } from "../../interfaces/exercises.interface"
import { useRouter } from "next/router"

function DisplayStretch({ exercise }: ExerciseProps) {
  const router = useRouter()

  const onBackClick = () => {
    router.back()
  }

  return (
    <div className="  bg-neutral-100 rounded-lg p-5" id="randomBox">
      <div className="flex justify-between items-center">
        <button className="" onClick={onBackClick}>
          <ArrowLeftIcon className="h-6 w-6  inline text-neutral-800" />
        </button>
        <h2 className="font-title font-bold text-center text-2xl px-2">
          {exercise.data.attributes.name}
        </h2>
        <button className="">
          <StarOutline className="h-6 w-6  inline text-neutral-800" />
        </button>
      </div>
      <div className="mt-5">
        <Image
          className="rounded-md"
          src={exercise.data.attributes.image.data.attributes.url}
          height={500}
          width={800}
          alt={exercise.data.attributes.name}
          objectFit="cover"
        />
      </div>
      <div className="flex mt-1 justify-center">
        <Countdown />
      </div>

      <div className=" text-left text-sm mt-5 bg-purple-100 rounded-md p-5 text-neutral-800 leading-relaxed">
        <h3 className="font-bold mb-2">Instructions:</h3>
        <ReactMarkdown>{exercise.data.attributes.details}</ReactMarkdown>
      </div>
      <div className="flex flex-wrap gap-2 mt-5 px-3 justify-center"></div>

      <div className="flex justify-center">
        <button
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

export default DisplayStretch
