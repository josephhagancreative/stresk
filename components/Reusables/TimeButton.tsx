import { TimeButtonProps } from "../../interfaces/exercises.interface"
import { motion } from "framer-motion"

function TimeButton({ duration, startTimer }: TimeButtonProps) {
  return (
    <motion.button
      className="bg-purple-500 text-neutral-100 font-bold font-title py-3 px-4 rounded-full hover:shadow-md"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={() => startTimer(duration)}>
      {duration}
    </motion.button>
  )
}

export default TimeButton
