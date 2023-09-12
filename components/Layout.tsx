import { NextPage } from "next"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navigation/Navbar"
import NewNav from "./Navigation/NewNav"

interface Props {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
