import React from "react"
import image from "@/assets/images/hologram-opera-logo.png"
import Image from "next/image"

const Header: React.FC = () => {
  return (
    <div className="p-8 font-[family-name:var(--font-big-shoulders-display)] w-full items-center justify-center flex flex-col">
      <div className="flex flex-row gap-4 justify-between ">
        <div className="">
          <Image
            src={image.src}
            alt="Hologram Opera Logo"
            className="w-auto"
            width="300"
            height="300"
          />
        </div>
        {/* <div className=" px-12 grow">
          <ul className="flex flex-row gap-4">
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div> */}
      </div>
      <div className="items-center justify-center flex flex-col gap-4 max-w-[600px] text-[20px] pt-8">
        Hologram Opera is a record label from the future run by artists Morgan Lhote, Krissy Barker
        and dl Salo with a lust for creating art and creating spreadsheets. We are based in Los
        Angeles and release music we love.
      </div>
    </div>
  )
}

export default Header
