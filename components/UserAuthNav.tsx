"use client"

import { FC } from "react"
import { User } from "next-auth"
import { signOut } from "next-auth/react"

import { buttonVariants } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu"

import UserAvatar from "./UserAvatar"

interface UserAuthNavProps {
  gUser:
    | {
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
      }
    | undefined
}

const UserAuthNav: FC<UserAuthNavProps> = ({ gUser }) => {
  return (
    <div
      className={buttonVariants({
        size: "icon",
        variant: "ghost",
      })}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar
            className="h-5 w-5"
            user={{
              name: gUser?.name || null,
              image: gUser?.image || null,
            }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => {
              signOut()
            }}
            className="cursor-pointer"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserAuthNav
