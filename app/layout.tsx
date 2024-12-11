import type { Metadata } from "next"
import { Geist_Mono, Big_Shoulders_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
      </body>
    </html>
  )
}