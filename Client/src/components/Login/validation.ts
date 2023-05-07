import { z } from "zod";

const loginValidation = z.object({
  email: z.string({
    required_error: "email is required!",
  }).email(),
  password: z.string().min(6).max(12)
});

export default loginValidation;