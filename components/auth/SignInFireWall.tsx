"use client"

import { siteConfig } from "@/config/site"
import React, { FC } from "react"

import { Icons } from "../Icons"
import SignInWithGoogle from "./SignInWithGoogle"

interface SignInFireWallProps {}

const SignInFireWall: FC<SignInFireWallProps> = ({}) => {
  return (
    <div className="h-[65svh] w-full flex items-center justify-center">
        <div className="space-y-3 p-7 md:p-8 lg:p-9 xl:p-10 text-center rounded-md shadow dark:border border-[#333]">
          <Icons.logo className="fill-current mx-auto h-11 w-11" />
          <h1 className="text-2xl font-semibold tracking-tight">Sign in to {siteConfig.title}</h1>
          <SignInWithGoogle />
        </div>
    </div>
  )
}

export default SignInFireWall
