import Image from "next/image"
import Link from "next/link"
import React from "react"
import NavLinks from "./NavLinks"

function DesktopNav() {
  return (
    <div className="flex flex-row w-full justify-between   ">
      <div>
        <Link href="/">
          <Image
            className=" cursor-pointer "
            src={`/images/stresk-logo-sm-wt.png`}
            alt="Stresk Logo"
            width={75}
            height={21}
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
    </div>
  )
}

export default DesktopNav
