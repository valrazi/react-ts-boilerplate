import { create } from 'zustand';
import type { User } from '@features/auth/types/user.type';

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (payload: { user: User; token: string }) => void;
  logout: () => void;
};

/** Global auth store with centralized token lifecycle. */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: ({ user, token }) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false })
}));
