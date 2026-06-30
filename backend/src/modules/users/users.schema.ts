import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  email: z.string().email("Invalid email address"),
  passwordHash: z.string().min(8, "Password must be atleast 8 characters"),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
