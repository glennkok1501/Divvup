import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// export interface BearState {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
//   updateBears: (newBears: number) => void;
// }

// export const useStore = create<BearState>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

export const useUserStore = create(
    persist(
      (set) => ({
      user: null,
      setUser: (newUser) => set({ user: newUser }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-storage"
    }
    )
);