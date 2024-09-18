import { z } from 'zod'

export const loginVal = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(6, { message: "Password should not be less than 6 characters" }),
  });