import { FC } from "react"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="grid items-center gap-6">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          Hi I&apos;m Josh, and welcome to Galleria.
        </h1>
        <p className="max-w-[700px] text-lg font-normal text-muted-foreground">
          Immerse yourself in our extensive collection of captivating images.
          Tailor your experience with personalized searches, and unlock a world
          of possibilities by signing in today.
        </p>
      </div>
    </section>
  )
}
