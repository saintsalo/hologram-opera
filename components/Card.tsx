import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type CardType = {
  thumbnail?: string
  date?: string
  title?: string
  children: React.ReactNode
  callToActionText?: string
  calllToActionLink: string
  image?: ImageMetaData
}

type ImageMetaData = {
  data: StaticImageData
  name: string
  caption?: string
}

const Card = ({ date, title, children, callToActionText, calllToActionLink, image }: CardType) => {
  return (
    <div className="max-w-xl h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <Link href={calllToActionLink}>
        <article className="w-full h-full">
          <figure className="border-black border-b-2">
            {image && (
              <Image
                src={image.data}
                alt={`${image.name}`}
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

            <p className="mb-4 line-clamp-2 lg:line-clamp-4">{children}</p>

            {callToActionText && <strong>{callToActionText}</strong>}
          </div>
        </article>
      </Link>
    </div>
  )
}

export default Card
