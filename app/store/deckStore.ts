import { create } from "zustand";
import { FlashcardData } from "../../mockData/testData";

interface UserProgress {
  monthCompletedID: number[];
  centuryCompletedID: number[];
  yearOfCenturyCompletedID: number[];
}

interface DeckState {
  currentDeck: FlashcardData[];
  currentDeckName: string;
  userProgress: UserProgress;
  setCurrentDeck: (deck: FlashcardData[], name: string) => void;
  resetDeck: () => void;
  updateUserProgress: (type: keyof UserProgress, id: number) => void;
  isCompleted: (type: keyof UserProgress, id: number) => boolean;
}

export const useDeckStore = create<DeckState>((set, get) => ({
  currentDeck: [],
  currentDeckName: "",
  userProgress: {
    monthCompletedID: [1],
    centuryCompletedID: [1, 2],
    yearOfCenturyCompletedID: [1, 2],
  },
  setCurrentDeck: (deck: FlashcardData[], name: string) =>
    set({ currentDeck: deck, currentDeckName: name }),
  resetDeck: () => set({ currentDeck: [], currentDeckName: "" }),
  updateUserProgress: (type: keyof UserProgress, id: number) => {
    const state = get();
    const currentIds = state.userProgress[type];
    if (!currentIds.includes(id)) {
      set({
        userProgress: {
          ...state.userProgress,
          [type]: [...currentIds, id],
        },
      });
    }
  },
  isCompleted: (type: keyof UserProgress, id: number) => {
    const state = get();
    return state.userProgress[type].includes(id);
  },
}));
