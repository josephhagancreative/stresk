import { NextPage } from "next"
import React from "react"
import Navbar from "./Navigation/Navbar"

interface Props {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
