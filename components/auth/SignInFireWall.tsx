"use client"

import React, { FC } from "react"

import { siteConfig } from "@/config/site"

import { Icons } from "../Icons"
import SignInWithGoogle from "./SignInWithGoogle"

interface SignInFireWallProps {}

const SignInFireWall: FC<SignInFireWallProps> = ({}) => {
  return (
    <div className="flex h-[65svh] w-full items-center justify-center">
      <div className="space-y-3 rounded-md border-[#333] p-7 text-center shadow dark:border md:p-8 lg:p-9 xl:p-10">
        <Icons.logo />
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to {siteConfig.title}
        </h1>
        <SignInWithGoogle />
      </div>
    </div>
  )
}

export default SignInFireWall
