import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import dayjs from "dayjs"
import clsx from "clsx"

type CardType = {
  thumbnail?: string
  date?: string
  eventDate?: boolean
  title?: string
  children: React.ReactNode
  callToActionText?: string
  calllToActionLink?: string
  image?: ImageMetaData | StaticImageData
  variant?: "default" | "event" | "artist" | "release"
}

type ImageMetaData = {
  data: StaticImageData
  name: string
  caption?: string
}

const Card = ({
  date,
  title,
  children,
  callToActionText,
  calllToActionLink,
  image,
  eventDate = false,
  variant = "default",
}: CardType) => {
  const Content = () => (
    <article className="w-full h-full">
      <figure className="border-black border-b-2 relative">
        {eventDate && (
          <div className="aspect-square w-16 h-16 absolute top-0 right-0 m-4 bg-white hover:bg-black hover:text-white hover:border-white border-2 border-black shadow-xl text-lg  flex flex-col justify-center text-center rounded-sm">
            <div className="leading-5 uppercase">{date && dayjs(date).format("MMM")}</div>
            <div className="leading-5 text-xl font-bold">{date && dayjs(date).format("DD")}</div>
          </div>
        )}
        {image && (
          <Image
            src={"data" in image ? image.data : image}
            alt={"data" in image ? image.name : ""}
            sizes="100vw"
            className="object-cover"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </figure>
      <div className="px-6 py-5 text-left h-full">
        {date && <p className="text-base mb-4">{date}</p>}
        {title && <h1 className="text-[32px] leading-8 font-bold mb-4">{title}</h1>}

        <p className="mb-4 line-clamp-2 lg:line-clamp-4 text-[20px] leading-6">{children}</p>

        {callToActionText && <strong>{callToActionText}</strong>}
      </div>
    </article>
  )

  return (
    <div
      className={clsx("max-w-4xl w-full h-full border-black border-2 rounded-md bg-white", {
        "hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]": calllToActionLink,
        "shadow-[8px_8px_0px_rgba(0,0,0,1)]": !calllToActionLink,
        "bg-[#F87A73]": variant == "release",
      })}
    >
      {calllToActionLink && (
        <Link href={calllToActionLink}>
          <Content />
        </Link>
      )}
      {!calllToActionLink && <Content />}
    </div>
  )
}

export default Card
