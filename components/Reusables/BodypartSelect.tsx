import { ExerciseDropdownProps } from "../../interfaces/exercises.interface"
import { useRouter } from "next/router"

interface BodyPartChangeEvent {
  target: {
    value: string
  }
}

function BodypartSelect({ bodyparts }: ExerciseDropdownProps) {
  const router = useRouter()

  const handleBodyPartChange = (event: BodyPartChangeEvent) => {
    router.push(`/bodyparts/${event.target.value}`)
  }

  return (
    <div className="bg-gradient-to-b from-purplebg to-blackbg py-10 text-neutral-200 rounded-t-lg -mt-2">
      <h2 className="font-bold font-title text-xl text-center">
        Find a specific stretch from our lists
      </h2>
      <div className="flex justify-center py-3">
        <select
          className="py-3 px-4 pr-9 block border-gray-200 rounded-full text-sm focus:border-purple-500 focus:ring-purple-500 bg-purple-200 hover:bg-purple-300 0 text-gray-800 cursor-pointer"
          onChange={handleBodyPartChange}>
          <option className="text-gray-400" value="">
            Select a body part
          </option>
          {bodyparts.map((bodypart) => (
            <option key={bodypart.attributes.bodypart} value={bodypart.id}>
              {bodypart.attributes.bodypart}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default BodypartSelect
