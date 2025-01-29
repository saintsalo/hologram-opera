"use client"
import React, { useEffect, useState } from "react"

const Newsletter: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="w-[800px] p-8 flex flex-col gap-8 items-center justify-center ">
      <h4>Signup for our Newsletter!</h4>
      <div
        className="hs-form-frame w-full"
        data-region="na1"
        data-form-id="609b80d3-a044-4283-a65b-999ce144a3fa"
        data-portal-id="49007331"
      ></div>

      <script src="https://js.hsforms.net/forms/embed/49007331.js" defer></script>
    </div>
  )
}

export default Newsletter
