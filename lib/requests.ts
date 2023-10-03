import { FactType } from "@/types/validators"
import { toast } from "@/hooks/use-toast"

import { axiosNinjasInstance } from "./axios"

export const fetchFacts = async (): Promise<FactType[] | undefined> => {
  try {
    const res: any = await axiosNinjasInstance.get(`/facts`, {
      params: {
        limit: 1,
      },
    })
    console.log(res)
    const parsedData: FactType[] = res.data
    console.log(parsedData)
    return parsedData
  } catch (error) {
    toast({
      description: "Error fetching facts",
      variant: "destructive",
    })
    console.error("Error fetching facts:", error)
    throw error
  }
}
