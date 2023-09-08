function Footer() {
  return (
    <div className="flex flex-col text-center justify-center bg-blackbg text-neutral-100 p-5">
      <p className=" text-sm">
        Copyright 2022 - {new Date().getFullYear()} Stresk
      </p>
      <p className="text-xs text-neutral-300">
        Disclaimer. This is not medical advice.
      </p>
    </div>
  )
}

export default Footer
