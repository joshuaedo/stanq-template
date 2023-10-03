import { Inter } from "next/font/google"

const variable = (variable: string) => {
  return `https://api.fontshare.com/v2/css?f[]=${variable}@400&display=swap`
}

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const generalSans = {
  subsets: ["latin"],
  variable: variable(`general-sans`),
}

export const bebasNeue = {
  subsets: ["latin"],
  variable: variable(`bebas-neue`),
}
