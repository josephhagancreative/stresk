import Link from "next/link"

function Contact() {
  return (
    <div className="flex justify-center flex-col mx-auto items-center min-h-screen bg-gradient-to-r from-purplebg to-blackbg">
      <Link href="https://twitter.com/ImJoee">
        <a target="_blank">
          <h2 className="text-white text-xl cursor-pointer hover:underline">
            Contact me on Twitter/X @ImJoee
          </h2>
        </a>
      </Link>
    </div>
  )
}

export default Contact
