import { z } from "zod";

export const userDataValidation = z.object({
  username: z.string().min(3)
})