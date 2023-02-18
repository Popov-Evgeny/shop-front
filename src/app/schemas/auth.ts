import { z } from 'zod';

export const LoginDtoSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email().min(1),
  name: z.string().min(1),
  token: z.string().min(1),
});

export const RegisterDtoSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(1),
  password: z.string().min(1),
});


