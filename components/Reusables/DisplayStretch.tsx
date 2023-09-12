import ReactMarkdown from "react-markdown"
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import Countdown from "./Countdown"
import { DisplayStretchProps } from "../../interfaces/exercises.interface"
import { motion } from "framer-motion"
import { CldVideoPlayer } from "next-cloudinary"
import BigButton from "./BigButton"
import Pill from "./Pill"

function DisplayStretch({
  exercise,
  backArrowOnClick,
  bigButtonOnClick,
  buttonText,
  buttonIcon,
}: DisplayStretchProps) {
  const videoUrl = exercise.attributes.video.data.attributes.url

  return (
    <div className="  bg-neutral-100 rounded-lg" id="randomBox">
      <div className="flex justify-between items-center">
        <motion.button
          className=""
          whileHover={{
            translateX: -3,
            transition: { duration: 0.3 },
          }}
          onClick={backArrowOnClick}>
          <ArrowLeftIcon className="h-6 w-6  inline text-neutral-800" />
        </motion.button>
        <h2 className="font-title font-bold text-center text-2xl px-2">
          {exercise.attributes.name}
        </h2>
        <motion.button
          className=""
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}>
          <StarOutline className="h-6 w-6  inline text-neutral-800" />
        </motion.button>
      </div>
      <div className="mt-5 relative w-full md:flex md:w-full gap-2">
        <div className="flex flex-1 w-2/3 overflow-hidden rounded-md">
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
        <div className="flex w-1/3 flex-col gap-2 md:ml-4">
          <div className="flex mt-1 justify-center">
            <Countdown />
          </div>

          <div className=" text-left text-sm mt-5 bg-purple-100 rounded-md p-5 text-neutral-800 leading-relaxed">
            <h3 className="font-bold mb-2">Instructions:</h3>
            <ReactMarkdown>{exercise.attributes.details}</ReactMarkdown>
          </div>
          <div className="flex justify-center pt-5 gap-2">
            {exercise.attributes.bodyparts.data.map((bodypart) => (
              <Pill
                key={bodypart.id}
                name={bodypart.attributes.bodypart}
                route={bodypart.id}
              />
            ))}
          </div>
          <div className="flex justify-center pt-5">
            <BigButton
              handleGo={bigButtonOnClick}
              text={buttonText}
              icon={buttonIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayStretch
