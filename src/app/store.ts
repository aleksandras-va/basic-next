import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterStore>((set) => {
  return {
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  };
});
