"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SessionProvider } from 'next-auth/react';

const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = new QueryClient()

  return (
    <SessionProvider>
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
    </SessionProvider>
  )
}

export default Providers
