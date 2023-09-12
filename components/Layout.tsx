import Footer from "./Footer"
import NewNav from "./Navigation/NewNav"

interface Props {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NewNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
