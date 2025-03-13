import React from "react"
import { RiInstagramFill, RiMastodonFill, RiYoutubeFill } from "react-icons/ri"

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <a href="https://www.instagram.com/hologram_opera/" target="_blank" rel="noreferrer">
        <RiInstagramFill className="text-4xl" />
      </a>
      <a rel="me" href="https://mastodon.social/@hologramopera" target="_blank">
        <RiMastodonFill className="text-4xl" />
      </a>
      <a href="https://www.youtube.com/@HologramOpera" target="_blank" rel="noreferrer">
        <RiYoutubeFill className="text-4xl" />
      </a>
    </div>
  )
}

export default Footer
