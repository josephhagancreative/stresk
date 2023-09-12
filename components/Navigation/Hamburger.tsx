import { motion } from "framer-motion"
import { HamburgerProps } from "../../interfaces/exercises.interface"

function Hamburger({ showNav, setShowNav }: HamburgerProps) {
  return (
    <motion.button
      animate={showNav ? "open" : "closed"}
      onClick={() => setShowNav(!showNav)}
      className="flex flex-col space-y-1 p-2 z-50 absolute right-0 mr-2">
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 5 },
        }}
        className="w-5 h-px bg-gray-50 block"></motion.span>
      <motion.span
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-5 h-px bg-gray-50 block"></motion.span>
      <motion.span
        variants={{
          closed: { rotate: 0 },
          open: { rotate: -45, y: -5 },
        }}
        className="w-5 h-px bg-gray-50 block"></motion.span>
    </motion.button>
  )
}

export default Hamburger
