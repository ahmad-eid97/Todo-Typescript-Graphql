import { z } from "zod";

const signupValidation = z.object({
  username: z.string({
    required_error: 'username is required'
  }).min(6).max(30),
  email: z.string().email(),
  password: z.string().min(6).max(12),
  confirmPassword: z.string().min(6).max(20)
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: 'custom',
      message: "passwords must match!"
    })
  }
});

export default signupValidation;