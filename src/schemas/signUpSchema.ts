import { emitWarning } from "process";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be at least 20 charactes")
  .max(20, "username must be at usnder 20 charactes")
  .regex(/^[a-zA-Z0-9]+$/, "user name  must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 character" }),
});
