import SignInFireWall from "@/components/auth/SignInFireWall"

export const metadata = {
  title: "Sign In to Galleria",
  description: "Sign in to your Galleria account.",
  openGraph: {
    title: "Sign In to Galleria",
    description: "Sign in to your Galleria account.",
  },
  twitter: {
    card: "summary",
    title: "Sign In to Galleria",
    description: "Sign in to your Galleria account.",
  },
}

const SignInPage = () => {
  return (
    <div className="flex min-h-[80svh] items-center justify-center">
      <SignInFireWall />
    </div>
  )
}

export default SignInPage
