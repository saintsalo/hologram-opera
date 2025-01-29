import hgt from "@/assets/images/morgane-lhote-profile.jpg"
import hsoh from "@/assets/images/hsoh.png"
import Image from "next/image"
import { FaBandcamp, FaInstagram, FaSoundcloud } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center">
      <div className="w-full p-8 flex lg:flex-col flex-wrap gap-8 items-center justify-center">
        <h4 className="w-full">Artists</h4>

        <div className="grid grid-cols-3 gap-8 items-start w-full">
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
            Hologram Teen is the solo project (and anagram) of former Stereolab keyboardist Morgane
            Lhote. Her colorful, playful songs are heavily influenced by horror movie soundtracks
            and Italo disco, as well as instrumental hip-hop. Initially from Paris, Morgane moved to
            London when she was 20, spent nearly a decade in New York City, and relocated to Los
            Angeles where she concentrated on her solo material. Hologram Teen's 4th LP “Captain
            Fluo” drops on Hologram Opera in the Summer of 2025. A neon odyssey through the
            underground Paris of the 1980s, “Captain Fluo” mixes disco, new wave, French pop, and
            vocals with heavy European accents. Just like crashing a Plastic Bertrand aerobics
            class, it's chaotic, sweaty and endlessly catchy.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 items-start">
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

/* <Card
            calllToActionLink="/card"
            image={{ data: hgt, name: "Hello from image" }}
            // date="2022-01-01"
            title="Hologram Teen"
          >
            Hologram Teen is the solo project (and anagram) of former Stereolab keyboardist Morgane
            Lhote. Her colorful, playful songs are heavily influenced by horror movie soundtracks
            and Italo disco, as well as instrumental hip-hop. Initially from Paris, Morgane moved to
            London when she was 20, spent nearly a decade in New York City, and relocated to Los
            Angeles where she concentrated on her solo material. Hologram Teen's 4th LP “Captain
            Fluo” drops on Hologram Opera in the Summer of 2025. A neon odyssey through the
            underground Paris of the 1980s, “Captain Fluo” mixes disco, new wave, French pop, and
            vocals with heavy European accents. Just like crashing a Plastic Bertrand aerobics
            class, it's chaotic, sweaty and endlessly catchy.
          </Card>
          <Card
            calllToActionLink="/card"
            image={{ data: hsoh, name: "Hello from image" }}
            // date="2022-01-01"
            title="Holy Sun Opera House"
          >
            Holy Sun Opera House is classically trained soprano and drummer Krissy Barker and
            composer dl Salo. Together they weave symphonic synths and operatic vocals with heavy
            drums. Their music evokes joy, terror, anger, love, and grief in a dreamlike fashion.
            The band has been described as one that would play the Roadhouse in Twin Peaks.
          </Card> */
