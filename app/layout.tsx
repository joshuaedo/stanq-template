import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig, siteFont } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import Providers from "@/components/layout/Providers"
import { Toaster } from "@/components/layout/Toaster"

const inter = Inter({ subsets: ["latin"] })

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
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="stylesheet" href={siteFont.url} />
        </head>
        <body
          className={cn(
            "general-sans min-h-screen bg-background font-sans antialiased"
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
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
