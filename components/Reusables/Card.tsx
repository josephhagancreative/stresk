import Image from "next/image"
import Link from "next/link"
import Pill from "./Pill"
import { ExerciseProps } from "../../interfaces/exercises.interface"
import { motion } from "framer-motion"

function Card({ exercise }: ExerciseProps) {
  const { name, excerpt } = exercise.attributes
  const imgUrl = exercise.attributes.image.data.attributes.formats.large.url
  const id = exercise.id
  const bodyparts = exercise.attributes.bodyparts.data
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer w-64 bg-white border-solid border-4 border-purple-50 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}>
      <Link href={`/stretches/${id}`}>
        <div>
          <Image
            className="object-cover w-full h-48"
            src={imgUrl}
            width={500}
            height={300}
            alt={name}
            layout="responsive"
          />

          <div className="px-3 py-3">
            <h4 className="mb-2 text-l font-semibold tracking-tight text-black">
              {name}
            </h4>
            <p className="text-sm leading-normal h-20 overflow-clip text-gray-700">
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex items-center p-2 gap-2 overflow-x-scroll scrollbar-hide cursor-grab">
        {bodyparts.map((bodypart) => (
          <Pill
            key={bodypart.id}
            name={bodypart.attributes.bodypart}
            route={bodypart.id}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Card
