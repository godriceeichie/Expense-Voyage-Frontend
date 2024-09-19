import { z } from 'zod'

export const loginVal = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(6, { message: "Password should not be less than 6 characters" }),
  });

export const signupVal = z.object({
name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should not be less than 3 characters" }),
email: z.string().email({ message: "Invalid email address" }),
password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password should not be less than 6 characters" }),
});


