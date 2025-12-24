import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Password mínimo 6 caracteres"),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Password es requerido"),
});

export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
