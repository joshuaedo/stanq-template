import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { bebasNeue, generalSans, inter } from "@/lib/fonts"
import Footer from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import Providers from "@/components/layout/Providers"
import { Toaster } from "@/components/layout/Toaster"

const { description, title, images, siteName, creator, url } = siteConfig

export const generateMetadata = async ({}): Promise<Metadata> => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: images[0],
          width: 200,
          height: 200,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator,
      images,
    },
    robots: {
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  }
}

export const viewport = {
   themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="stylesheet" href={bebasNeue.variable} />
          <link rel="stylesheet" href={generalSans.variable} />
        </head>
        <body className={inter.className}>
          <Providers>
            <div className="relative flex min-h-[100svh] flex-col bg-background">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <Toaster />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
