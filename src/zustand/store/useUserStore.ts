import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  nickname: string | null;
  email: string | null;
  id: string | null
};

type UserState = {
  user: User | null;
  isLogin: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        isLogin: false,
        user: null,
        setUser: (user) => set({ user, isLogin: true }),
        clearUser: () => set({ user: null, isLogin: false }),
      }),
      { name: 'user-storage' },
    ),
  ),
);
