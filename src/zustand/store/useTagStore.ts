import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  logout: () => set({ isLoggedIn: false }),
}));

interface TagState {
  gender: string;
  style: string;
  seasons: string[];
  locations: string[];
  setTags: (tags: Partial<TagState>) => void;
  resetTags: () => void;
}

export const useTagStore = create<TagState>((set) => ({
  gender: '',
  style: '',
  seasons: [],
  locations: [],
  setTags: (tags) => set((state) => ({ ...state, ...tags })),
  resetTags: () => set({ gender: '', style: '', seasons: [], locations: [] }),
}));
