import hgt from "@/assets/images/morgane-lhote-shot.png"
import hsoh from "@/assets/images/hsoh.png"
import ct from "@/assets/images/connection-transpacifique.png"
import Image from "next/image"
import { FaBandcamp, FaInstagram, FaSoundcloud, FaSpotify } from "react-icons/fa"
import YoutubeEmbed from "@/components/YoutubeEmbed"
import Card from "@/components/Card"
import { RiYoutubeFill } from "react-icons/ri"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center p-8">
      <Card
        // calllToActionLink="https://hologramteen.bandcamp.com/track/connection-transpacifique"
        title="Connection transpacifique 🪩"
        date="03/07/2025"
        variant="release"
        image={ct}
      >
        <p className="mb-4">Connection transpacifique is the new single by Hologram Teen</p>
        <p className="mb-4 flex flex-row gap-4 items-center">
          <a
            href="https://hologramteen.bandcamp.com/track/connection-transpacifique"
            target="_blank"
            className="flex flex-row gap-1 items-center mb-4"
          >
            <FaBandcamp /> <span>Bandcamp</span>
          </a>
          <a
            href="https://open.spotify.com/album/4OVeIqkruiWR7tFaL1QgKP?si=EaJUEQiSR-eraxoTcuaYFA"
            target="_blank"
            className="flex flex-row gap-1 items-center mb-4"
          >
            <FaSpotify /> <span>Spotify</span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=Z42SAeKg8dA"
            target="_blank"
            className="flex flex-row gap-1 items-center mb-4"
          >
            <RiYoutubeFill /> <span>YouTube</span>
          </a>
        </p>
        <div className="flex flex-col gap-8 mt-8">
          <div>
            {/* <h5 className="flex flex-row gap-2 items-center mb-4">
              <FaBandcamp /> Bandcamp
            </h5> */}
            <iframe
              style={{ border: 0, width: "100%", height: "42px" }}
              className="block md:hidden"
              src="https://bandcamp.com/EmbeddedPlayer/track=1584144519/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
              seamless
            >
              <a href="https://hologramteen.bandcamp.com/track/connection-transpacifique">
                Connection transpacifique by Hologram Teen
              </a>
            </iframe>
            <iframe
              style={{ border: 0, width: "100%", height: "120px" }}
              className="border-4 border-white rounded hidden md:block"
              src="https://bandcamp.com/EmbeddedPlayer/track=1584144519/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://hologramteen.bandcamp.com/track/connection-transpacifique">
                Connection transpacifique by Hologram Teen
              </a>
            </iframe>
            {/* <iframe
              style={{ width: "350px", height: "442px" }}
              className="border-4 border-white rounded hidden md:block"
              src="https://bandcamp.com/EmbeddedPlayer/track=1584144519/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://hologramteen.bandcamp.com/track/connection-transpacifique">
                Connection transpacifique by Hologram Teen
              </a>
            </iframe> */}
          </div>
          <div>
            {/* <h5 className="flex flex-row gap-2 items-center mb-4">
              <RiYoutubeFill /> Youtube
            </h5> */}
            <YoutubeEmbed embedId="Z42SAeKg8dA?si=cJdxrR52cMyy74aG" />
          </div>
        </div>
      </Card>
      <div className="w-full p-8 flex lg:flex-col flex-wrap gap-8 items-center justify-center">
        <h4 className="w-full">Artists</h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
          <div className="border-8 border-black p-4 bg-gray-50 rounded">
            <Image src={hgt} alt="Morgane Lhote" className="rounded-md" />
          </div>
          <div className=" bg-gray-50 p-4 col-span-2">
            <div className="flex flex-row w-full justify-between pb-8">
              <h3 className="pr-4">Hologram Teen</h3>
              <div className="flex flex-row gap-4">
                <a
                  href="https://hologramteen.bandcamp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus bandcamp"
                >
                  <FaBandcamp />
                </a>

                <a
                  href="https://soundcloud.com/hologramteen"
                  target="_blank"
                  rel="noreferrer"
                  className="focus soundcloud"
                >
                  <FaSoundcloud />
                </a>

                <a
                  href="https://www.instagram.com/hologram_teen/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              Hologram Teen&apos;s 4th LP &quot;Captain Fluo&quot; drops on Hologram Opera in the
              Summer of 2025. A neon odyssey through the underground Paris of the 1980s,
              &quot;Captain Fluo&quot; mixes disco, new wave, French pop, and vocals with heavy
              European accents. Just like crashing a Plastic Bertrand aerobics class, it&apos;s
              chaotic, sweaty and endlessly catchy.
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-start">
          <div className="border-8 border-black p-4 bg-gray-50 rounded">
            <Image src={hsoh} alt="Holy Sun Opera House" className="rounded-md w-full" />
          </div>
          <div className=" bg-gray-50 p-4 col-span-2">
            <div className="flex flex-row w-full justify-between pb-8">
              <h3 className="pr-4">Holy Sun Opera House</h3>
              <div className="flex flex-row gap-4">
                <a
                  href="https://holysunoperahouse.bandcamp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus bandcamp"
                >
                  <FaBandcamp />
                </a>

                <a
                  href="https://www.instagram.com/holy_sun_opera_house/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            Holy Sun Opera House is classically trained soprano and drummer Krissy Barker and
            composer dl Salo. Together they weave symphonic synths and operatic vocals with heavy
            drums. Their music evokes joy, terror, anger, love, and grief in a dreamlike fashion.
            The band has been described as one that would play the Roadhouse in Twin Peaks.
          </div>
        </div>
      </div>
    </div>
  )
}
