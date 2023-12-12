import { z } from "zod";
export const AuthCredentialsValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type TAuthCredentialsValidation = z.infer<
  typeof AuthCredentialsValidation
>;
