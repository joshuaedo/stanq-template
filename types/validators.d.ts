import { z } from "zod";

export const FactValidator = z.string(),

export type FactType = z.infer<typeof FactValidator>;