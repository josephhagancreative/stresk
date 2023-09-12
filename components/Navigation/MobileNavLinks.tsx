import Link from "next/link"
import { MobileNavLinksProps } from "../../interfaces/exercises.interface"
import { motion } from "framer-motion"

function MobileNavLinks({ setShowNav }: MobileNavLinksProps) {
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.9,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  }

  const mobileLinkVars = {
    initial: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <div className="justify-self-center pb-3 mt-2 md:pb-0 md:mt-0 ">
      <motion.ul
        variants={containerVars}
        initial="initial"
        animate="open"
        className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        <motion.li
          className="text-neutral-100 hover:text-neutral-300"
          variants={mobileLinkVars}
          key="home">
          <Link href="/">
            <p onClick={() => setShowNav(false)} className="cursor-pointer">
              Home
            </p>
          </Link>
        </motion.li>
        <motion.li
          variants={mobileLinkVars}
          className="text-neutral-100 hover:text-neutral-300 "
          key="stretches">
          <Link href="/stretches">
            <p onClick={() => setShowNav(false)} className="cursor-pointer">
              Stretches
            </p>
          </Link>
        </motion.li>
        <motion.li
          variants={mobileLinkVars}
          className="text-neutral-100 hover:text-neutral-300"
          key="contact">
          <Link href="/contact">
            <p onClick={() => setShowNav(false)} className="cursor-pointer">
              Contact
            </p>
          </Link>
        </motion.li>
        <motion.li
          variants={mobileLinkVars}
          className="text-neutral-100 hover:text-neutral-300"
          key="login">
          <Link href="/login">
            <p onClick={() => setShowNav(false)} className="cursor-pointer">
              Login
            </p>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default MobileNavLinks
