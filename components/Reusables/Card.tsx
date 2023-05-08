import Image from "next/image"
import Link from "next/link"
import { ExerciseProps } from "../../interfaces/exercises/exercises.interface"

function Card({ exercise }: ExerciseProps) {
  const { name, slug, details, excerpt } = exercise.attributes
  const imgUrl = exercise.attributes.image.data.attributes.formats.large.url
  const bodyparts = exercise.attributes.bodyparts.data
  return (
    <Link href={`/stretches/${slug}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer w-56 bg-gradient-to-r from-purplebg to-blackbg  ">
        <Image
          className="object-cover w-full h-48 mix-blend-overlay "
          src={imgUrl}
          width={500}
          height={300}
          layout="responsive"
        />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="mb-3 text-l font-semibold tracking-tight text-white">
            {name}
          </h4>
          <p className="text-sm leading-normal text-gray-100">{excerpt}</p>
        </div>
      </div>
      {/* <div className="flex flex-col h-full">
        <div className="flex-shrink-0 w-56 mx-2 cursor-pointer">
          <div className="bg-cover rounded-t overflow-hidden" title={name}>
            <Image
              src={imgUrl}
              width={500}
              height={300}
              layout="responsive"
              className="w-full h-auto"
            />
          </div>
          <div className="border-r border-b border-l border-gray-400 bg-white rounded-b p-2 flex flex-col justify-between leading-normal">
            <div className="mb-1">
              <div className="text-gray-900 font-bold text-l mb-2">{name}</div>
              <p className="text-gray-700 text-sm">{excerpt}</p>
            </div>
          </div>
        </div>
      </div> */}
    </Link>
  )
}

export default Card
