import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  name: string | null;
  nickname: string | null;
  email: string | null;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        // 로그아웃 할 때, user가 null로 변경
        clearUser: () => set({ user: null }),
      }),
      { name: 'user-storage' },
    ),
  ),
);
