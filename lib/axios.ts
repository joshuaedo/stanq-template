import axios from "axios"

export const axiosNinjasInstance = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    accept: "application/json",
    "X-Api-Key": process.env.NEXT_PUBLIC_NINJAS_API_KEY,
  },
})
