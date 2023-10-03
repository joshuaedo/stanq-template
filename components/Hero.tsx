"use client"

import { FC } from "react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { fetchFacts } from "@/lib/requests"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/Button"
import Loader from "./ui/Loader"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  const { data, isFetched, isFetching } = useQuery({
    queryFn: () => fetchFacts(),
    queryKey: ["facts"],
    enabled: true,
  })

  return (
    <section className="w-full px-20">
      <h1 className="space-y-4 pt-20 text-4xl font-medium md:text-5xl">
        Welcome to Stanq. I&apos;m Josh, and this is a React.js template
        bootstrapped with Shadcn UI, Typescript, Auth.js, Next.js App router,
        and React Query.
      </h1>

      <p>Get started by editing app/page.tsx.</p>

      <p>
        Read the{" "}
        <Link
          href={`${siteConfig.github}/README.md`}
          className={cn(
            "",
            buttonVariants({
              variant: "link",
            })
          )}
        >
          docs
        </Link>
        .
      </p>

      <p>Here&apos;s a random fact:</p>

      {isFetching && <Loader />}
      {isFetched && data && <p>{data[0].fact}</p>}
    </section>
  )
}
