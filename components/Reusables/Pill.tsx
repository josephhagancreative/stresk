import { useRouter } from "next/router"
import { PillProps } from "../../interfaces/exercises.interface"

function Pill({ name, route }: PillProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/bodyparts/${route}`)
  }
  return (
    <span
      onClick={handleClick}
      className={`px-2 py-1 rounded-full font-title bg-purple-200
       text-neutral-700 text-sm font-semibold  w-max cursor-pointer transition duration-300 ease md:hover:bg-purple-400 active:bg-purple-500  `}>
      {name}
    </span>
  )
}

export default Pill
