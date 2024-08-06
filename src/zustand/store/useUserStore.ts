import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  id: string;
  nickname: string;
  email: string;
  profileImage: string;
};

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  clearUser: () => void; // 상태 초기화
  setIsLoggedIn: (isLoggedIn: boolean) => void;
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
      }), 
      { name: 'user-storage' },
    ),
  ),
);