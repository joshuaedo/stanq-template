import { toast } from "@/hooks/use-toast"
import { PexelsPhoto } from "../types/photos"
import { axiosInstance } from "./axios"

export const fetchPhotos = async (): Promise<ImagesResults | undefined> => {
  try {
    const res = await axiosInstance.get(`/c`, {
      params: {
        page: 1,
      },
    })
    const parsedData: ImagesResults = res.data

    console.log(parsedData)

    return parsedData 
  } catch (error) {
    throw error
  }
}

