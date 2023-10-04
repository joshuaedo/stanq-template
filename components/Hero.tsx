"use client"

import { FC } from "react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { fetchFacts } from "@/lib/requests"

import Loader from "./ui/Loader"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  const { data, isFetched, isFetching } = useQuery({
    queryFn: () => fetchFacts(),
    queryKey: ["facts"],
    enabled: true,
  })

  return (
    <section className="w-full space-y-4 py-16  px-4 md:px-8 lg:px-16 xl:px-20">
      <h1 className="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl">
        Welcome to Stanq. I&apos;m Josh, and this is a React.js template
        bootstrapped with Shadcn UI, Typescript, Auth.js, Next.js App router,
        and React Query.
      </h1>

      <p className="p-2 text-sm">Get started by editing app/page.tsx.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="rounded-md border-[#333] p-4 shadow dark:border">
          <p className="uppercase font-semibold text-xs pb-1">About</p>
          <p className="text-sm">
            Stanq is an opinionated collection of libraries, components, hooks, and
            utilities for your Next.js project. Read our{" "}
            <Link
              href={`${siteConfig.github}#readme`}
              className="underline underline-offset-4"
            >
              docs
            </Link>
            .
          </p>
        </div>

        <div className="rounded-md border-[#333] p-4 shadow dark:border">
          {isFetching && <Loader />}
          {isFetched && !isFetching && data && (
            <>
              <p className="uppercase font-semibold text-xs pb-1">
                Did you know?
              </p>
              <p className="text-sm">{data[0].fact}</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
