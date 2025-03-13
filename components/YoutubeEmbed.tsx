"use client"
import React from "react"

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%", height: 0 }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full border-4 rounded-md border-white"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default YoutubeEmbed
