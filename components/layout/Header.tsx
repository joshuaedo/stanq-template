"use client"

import Image from "next/image"
import Link from "next/link"
import { LogIn } from "lucide-react"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"

import { Icons } from "../Icons"
import UserAuthNav from "../UserAuthNav"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const session = useSession()
  const stanqUser = session?.data?.user
  const { images, author } = siteConfig

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="general-sans flex gap-1.5 font-semibold">
          <Image
            src={images[0]}
            alt="logo"
            width={100}
            height={100}
            className="h-5 w-5"
          />
          <Link href="/">Stanq</Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={author.url} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Image
                  src={author.images[0]}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-5 w-5 fill-current"
                />
                <span className="sr-only">{author.name}&apos;s Portfolio</span>
              </div>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={author.github}
              className={buttonVariants({ variant: "ghost" })}
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>

            {stanqUser ? (
              <UserAuthNav gUser={stanqUser} />
            ) : (
              <Link href="/sign-in">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <LogIn className="h-5 w-5" />
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
