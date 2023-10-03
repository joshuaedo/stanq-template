import { FC } from "react"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="w-full px-20">
        <h1 className="text-4xl font-medium md:text-5xl pt-20">
          Welcome to Stanq. I&apos;m Josh, and this is a React.js template bootstrapped with 
          Shadcn ui, Typescript, Auth.js, Next.js App router, and React Query.
        </h1>
    </section>
  )
}
