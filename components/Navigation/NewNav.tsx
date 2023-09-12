import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hamburger from "./Hamburger"
import DesktopNav from "./DesktopNav"
import MobileNavLinks from "./MobileNavLinks"

function NewNav() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="w-full bg-gradient-to-r from-purplebg to-blackbg fixed top-0 z-50">
      <div className=" flex justify-between px-8 mx-auto md:max-w-5xl md:items-center md:flex md:px-4 relative py-3">
        {!showNav && <DesktopNav />}
        <AnimatePresence>
          {showNav && (
            <motion.div
              className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-purplebg to-blackbg z-10 origin-top "
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
              }}
              exit={{
                scaleY: 0,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              key="navMenu">
              <motion.div className="flex h-full justify-center items-center">
                <MobileNavLinks setShowNav={setShowNav} />
              </motion.div>
            </motion.div>
          )}
          <div className="md:hidden">
            <Hamburger showNav={showNav} setShowNav={setShowNav} />
          </div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NewNav
