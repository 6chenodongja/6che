import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  id: string;
  nickname: string;
  email: string;
  provider: string;
  profileImage?: string;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }), 
      { name: 'user-storage' },
    ),
  ),
);
