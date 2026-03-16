import { LoginSchema, type LoginPayload } from '@features/auth/schemas/login.schema';

/** Demo auth service with schema validation before submit. */
export const authService = {
  login(payload: LoginPayload) {
    const parsed = LoginSchema.parse(payload);
    return Promise.resolve({
      user: { id: '1', email: parsed.email, name: 'Enterprise User' },
      token: 'demo-jwt-token'
    });
  }
};
