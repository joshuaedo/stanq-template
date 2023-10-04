"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextThemesProvider>
    </SessionProvider>
  )
}

export default Providers
