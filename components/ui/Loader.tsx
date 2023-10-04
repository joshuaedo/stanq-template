import { FC } from "react"
import { Loader2 } from "lucide-react"

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}

export default Loader

export const PageLoader: FC<LoaderProps> = ({}) => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}
