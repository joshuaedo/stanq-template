import { siteConfig } from "@/config/site"
import SignInFireWall from "@/components/auth/SignInFireWall"

const { title } = siteConfig

const signInMetaData = () => {
  return {
    title: title,
    description: `Sign in to your ${title} account.`,
  }
}

export const metadata = {
  title,
  description: `Sign in to your ${title} account.`,
  openGraph: signInMetaData,
  twitter: signInMetaData,
}

const SignInPage = () => {
  return (
    <div className="flex min-h-[80svh] items-center justify-center">
      <SignInFireWall />
    </div>
  )
}

export default SignInPage
