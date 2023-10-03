"use client"

import React, { FC } from "react"

import { Icons } from "../Icons"
import SignInWithGoogle from "./SignInWithGoogle"

interface SignInFireWallProps {}

const SignInFireWall: FC<SignInFireWallProps> = ({}) => {
  return (
    <div className="flex h-[70vh] items-center justify-center rounded-md shadow md:px-6">
      <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[25rem]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-7 w-7" />
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <SignInWithGoogle />
        </div>
      </div>
    </div>
  )
}

export default SignInFireWall
