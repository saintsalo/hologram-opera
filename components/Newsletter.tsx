"use client"
import React, { useEffect } from "react"

declare global {
  interface Window {
    hbspt: any
  }
}

const Newsletter: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "49007331",
          formId: "609b80d3-a044-4283-a65b-999ce144a3fa",
          target: "#hubspotForm",
        })
      }
    })
  }, [])

  return (
    <div className="w-[400px] p-8 flex flex-col gap-8 items-center justify-center ">
      <h4>Signup for our Newsletter!</h4>
      <div className="w-full" id="hubspotForm"></div>
    </div>
  )
}

export default Newsletter
