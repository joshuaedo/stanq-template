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
    <section className="w-full space-y-4 px-4 md:px-8 lg:px-16 xl:px-20">
      <h1 className="pt-20 text-3xl font-medium md:text-4xl lg:text-5xl">
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
            "px-0",
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
      {isFetched && data && (
        <div className="rounded-md border-[#333] p-2 shadow dark:border">
          <p>{data[0].fact}</p>
        </div>
      )}
    </section>
  )
}
