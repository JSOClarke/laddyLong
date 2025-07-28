import { FlashcardData, flashcardData } from "@/mockData/testData";

export function splitIntoDecks(cards: FlashcardData[], size = 6) {
  const decks = [];
  for (let i = 0; i < cards.length; i += size) {
    decks.push({
      id: decks.length + 1,
      name: `Deck ${decks.length + 1}`,
      cards: cards.slice(i, i + size),
    });
  }
  return decks;
}
