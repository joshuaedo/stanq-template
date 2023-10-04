import { siteConfig } from "@/config/site"
import SignInFireWall from "@/components/auth/SignInFireWall"

const { title } = siteConfig

export const metadata = {
  title,
  description: `Sign in to your ${title} account.`
}

const SignInPage = () => {
  return <SignInFireWall />
}

export default SignInPage
