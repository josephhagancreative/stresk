import Link from "next/link"

function NavLinks() {
  return (
    <div className="justify-self-center pb-3 mt-2 md:pb-0 md:mt-0 ">
      <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        <li className="text-neutral-100 hover:text-neutral-300">
          <Link href="/">
            <p className="cursor-pointer">Home</p>
          </Link>
        </li>
        <li className="text-neutral-100 hover:text-neutral-300 ">
          <Link href="/stretches">
            <p className="cursor-pointer">Stretches</p>
          </Link>
        </li>
        <li className="text-neutral-100 hover:text-neutral-300">
          <Link href="/contact">
            <p className="cursor-pointer">Contact</p>
          </Link>
        </li>
        <li className="text-neutral-100 hover:text-neutral-300">
          <Link href="/login">
            <p className="cursor-pointer">Login</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
