import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserState = {
  name: string | null;
  nickname: string | null;
  email: string | null;
  setUser: (
    name: string | null,
    nickname: string | null,
    email: string | null,
  ) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist((set) => ({
      name: null,
      nickname: null,
      email: null,
      setUser: (name, nickname, email) => set({ name, nickname, email }),
    })),
  ),
);
