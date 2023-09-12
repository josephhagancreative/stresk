import { BigButtonProps } from "../../interfaces/exercises.interface"
import { motion } from "framer-motion"

function BigButton({ handleGo, text, icon }: BigButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={handleGo}
      className="rounded-lg flex justify-center bg-purple-500 text-gray-50 
          text-xl font-bold font-title cursor-pointer px-6 py-2.5 hover:shadow-md ">
      <a href="#randomBox">
        {text}
        {icon}
      </a>
    </motion.button>
  )
}

export default BigButton
