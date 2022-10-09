import Image from "next/image"
import Link from "next/link"
import { ExerciseProps } from "../interfaces/exercises/exercises.interface"
import Chip from "./Chip"

function Card(props: ExerciseProps) {
  const { name, slug, details, excerpt } = props.exercise.attributes
  const imgUrl = `http://localhost:8888${props.exercise.attributes.image.data.attributes.url}`
  const bodyparts = props.exercise.attributes.bodyparts.data
  return (
    <Link href={`/stretches/${slug}`}>
      <li>
        <div className="max-w-sm w-full lg:max-w-full lg:flex cursor-pointer">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            // style={{
            //   backgroundImage: `url(${imgUrl})`,
            // }}
            title={name}>
            <Image src={imgUrl} width={500} height={420} />
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 text-base">{excerpt}</p>
              <div className="flex gap-2 flex-wrap justify-start pt-3">
                {bodyparts.map((bodypart) => (
                  <Chip
                    attribute={bodypart.attributes.bodypart}
                    key={bodypart.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default Card
