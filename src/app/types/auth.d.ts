import { z } from 'zod';
import {
  LoginDtoSchema,
  RegisterDtoSchema,
  UserSchema,
} from '../schemas/auth';

export type LoginDto = z.infer<typeof LoginDtoSchema>;
export type User = z.infer<typeof UserSchema>;
export type RegisterDto = z.infer<typeof RegisterDtoSchema>;

