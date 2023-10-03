"use client"

import { User } from 'next-auth';
import React, { FC } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { Icons } from '@/components/Icons';
import { AvatarProps } from '@radix-ui/react-avatar';

interface UserAvatarProps extends AvatarProps {
  user: { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; } | undefined
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user?.image ? (
        <AvatarImage
          src={user.image}
          alt='profile picture'
          referrerPolicy='no-referrer'
        />
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <Icons.user className='h-5 w-5' />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;