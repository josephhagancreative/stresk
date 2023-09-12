import { ArrowDownCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import BigButton from "./Reusables/BigButton"

function Hero() {
  const icon = (
    <ArrowDownCircleIcon className=" ml-2 h-6 w-6 inline text-neutral-100" />
  )
  return (
    <>
      <section className="flex justify-center items-center text-center min-h-screen bg-gradient-to-r from-purplebg to-blackbg -mt-7 ">
        <div className="m-auto">
          <h1 className="font-bold font-title leading-tight text-6xl text-purple-200 px-2">
            <span className="text-gray-50">Stretch </span>
            at your
            <span className="text-gray-50"> Desk</span>
          </h1>
          <h2 className="font-medium font-title leading-tight text-4xl mt-5 text-purple-400">
            Reduce Stress
          </h2>
          <p className="mt-5 text-purple-100">
            Choose some body parts and get a random stretch whenever you need it
          </p>
          <div className="inline-block mt-10">
            <BigButton handleGo={() => {}} icon={icon} text="Stretch Now" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
