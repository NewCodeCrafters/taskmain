import { z } from "zod";

export const registerSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(8, "Minimum of 8 characters")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain at leat 1 uppercase, 1 lowercase, and 1 special character"
    ),
});
