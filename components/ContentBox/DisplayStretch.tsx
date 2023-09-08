import ReactMarkdown from "react-markdown"
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import Countdown from "../Reusables/Countdown"
import { ExerciseProps } from "../../interfaces/exercises.interface"
import { useRouter } from "next/router"
import { CldVideoPlayer } from "next-cloudinary"

function DisplayStretch({ exercise }: ExerciseProps) {
  const router = useRouter()

  const videoUrl = exercise.data.attributes.video.data.attributes.url

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
      <div className="mt-5 relative w-full">
        <CldVideoPlayer
          width="720"
          height="480"
          src={videoUrl}
          colors={{
            accent: "#f2dbf8",
            base: "#524173",
            text: "#f2dbf8",
          }}
          autoPlay="always"
          loop={true}
          muted={true}
        />
      </div>
      <div className="flex mt-1 justify-center">
        <Countdown />
      </div>

      <div className=" text-left text-sm mt-5 bg-purple-100 rounded-md p-5 text-neutral-800 leading-relaxed">
        <h3 className="font-bold mb-2">Instructions:</h3>
        <ReactMarkdown>{exercise.data.attributes.details}</ReactMarkdown>
      </div>
    </div>
  )
}

export default DisplayStretch
