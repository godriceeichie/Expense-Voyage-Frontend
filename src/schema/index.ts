import { z } from "zod";

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

export const emailValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resetPasswordVal = z
  .object({
    password: z
      .string()
      .min(5, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Field must not be left empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const userProfileVal = z.object({
    name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should not be less than 3 characters" }),
    phone_number: z.string().min(11, {message: "Invalid phone number"}).optional()
})
