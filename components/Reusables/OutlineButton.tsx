import { motion } from "framer-motion"
import { OutlineButtonProps } from "../../interfaces/exercises.interface"

function OutlineButton({ text, icon, onClick }: OutlineButtonProps) {
  return (
    <motion.button
      className="rounded-full flex flex-row justify-center gap-2 w-64 border-white border-2 text-neutral-100 
          text-lg font-medium font-title cursor-pointer px-4 py-2 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}>
      <div>{icon}</div>
      <div>{text}</div>
    </motion.button>
  )
}

export default OutlineButton
