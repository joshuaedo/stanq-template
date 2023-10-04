import { z } from "zod"

export const FactValidator = z.object({
  fact: z.string(),
})

export type FactType = z.infer<typeof FactValidator>
