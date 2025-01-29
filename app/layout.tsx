import type { Metadata } from "next"
import { Geist_Mono, Big_Shoulders_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hologram Opera",
  description: "Holgram Opera is a record label based in Los Angeles, California.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bigShouldersDisplay.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="items-center justify-center p-8 bg-gray-50 min-w-[200px] flex flex-col">
          <Newsletter />
        </div>
        <div className="mx-auto max-w-screen-xl">{children}</div>

        <div className="items-center justify-center flex flex-col gap-4 w-full py-16 bg-black text-white">
          <Footer />
        </div>
        <script src="https://js.hsforms.net/forms/embed/49007331.js" defer></script>
      </body>
    </html>
  )
}
