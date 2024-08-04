import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  name: string | null;
  nickname: string | null;
  email: string | null;
};

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLoggedIn: false,
        setUser: (user) => set({ user, isLoggedIn: true }),
        clearUser: () => set({ user: null, isLoggedIn: false }),
        setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
        logout: () => set({ user: null, isLoggedIn: false }),
      }),
      { name: 'user-storage' },
    ),
  ),
);