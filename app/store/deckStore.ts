import { create } from "zustand";
import { FlashcardData } from "../../mockData/testData";

interface DeckState {
  currentDeck: FlashcardData[];
  currentDeckName: string;
  setCurrentDeck: (deck: FlashcardData[], name: string) => void;
  resetDeck: () => void;
}

export const useDeckStore = create<DeckState>((set) => ({
  currentDeck: [],
  currentDeckName: "",
  setCurrentDeck: (deck: FlashcardData[], name: string) =>
    set({ currentDeck: deck, currentDeckName: name }),
  resetDeck: () => set({ currentDeck: [], currentDeckName: "" }),
}));
