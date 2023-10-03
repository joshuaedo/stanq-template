"use client"

import { FC } from "react"
import Link from "next/link"

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="general-sans font-medium">
      <Link href="/">Stanq</Link>
    </div>
  )
}

export default Logo
