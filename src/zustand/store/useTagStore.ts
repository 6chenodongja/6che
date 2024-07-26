import { create } from 'zustand';

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
    resetTags: () => set({ gender: '', style: '', seasons: [], locations: [] })
}));
