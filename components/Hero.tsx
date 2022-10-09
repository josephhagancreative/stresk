import { ArrowDownCircleIcon } from "@heroicons/react/24/solid"

function Hero() {
  return (
    <>
      <section className="flex justify-center items-center text-center min-h-screen bg-gradient-to-r from-purplebg to-blackbg -mt-7 ">
        <div className="m-auto">
          <h1 className="font-bold font-title leading-tight text-6xl text-purple-200 ">
            <span className="text-neutral-100">Stretch </span>
            at your
            <span className="text-neutral-100"> Desk</span>
          </h1>
          <h2 className="font-medium font-title leading-tight text-4xl mt-5 text-purple-400">
            Reduce Stress
          </h2>
          <p className="mt-5 text-purple-100">
            Choose some body parts and get a random stretch whenever you need it
          </p>
          <button className="inline-block px-6 py-2.5 mt-10 bg-purple-500 text-neutral-50  text-shadow font-title font-black text-lg leading-tight tracking-wider rounded-full hover:bg-purple-400 hover:shadow-md focus:bg-purple-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg transition duration-150 ease-in-out">
            <a href="#randomBox">
              Stretch Now
              <ArrowDownCircleIcon className=" ml-2 h-6 w-6 inline text-neutral-100" />
            </a>
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
