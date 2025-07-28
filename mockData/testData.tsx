export interface FlashcardData {
  id: number;
  front: string;
  back: string;
}

export const flashcardData: FlashcardData[] = [
  {
    id: 1,
    front: "Ik woon in een ___.",
    back: "huis",
  },
  {
    id: 2,
    front: "___, hoe gaat het?",
    back: "Goedemorgen",
  },
  {
    id: 3,
    front: "Dank je betekent ___.",
    back: "dank je",
  },
  {
    id: 4,
    front: "Ik heet Anna. ___ heet jij?",
    back: "Hoe",
  },
  {
    id: 5,
    front: "Kun je me helpen, ___?",
    back: "alsjeblieft",
  },
  {
    id: 6,
    front: "___ gaat het vandaag met jou?",
    back: "Hoe",
  },
  {
    id: 7,
    front: "Ik lees een ___.",
    back: "boek",
  },
  {
    id: 8,
    front: "___ en slaap lekker!",
    back: "Goedenacht",
  },
  {
    id: 9,
    front: "___, dat was mijn fout.",
    back: "Sorry",
  },
  {
    id: 10,
    front: "Tot ziens betekent ___.",
    back: "tot ziens",
  },
];

export const doomsdayMonthData: FlashcardData[] = [
  { id: 1, front: "January", back: "4" },
  { id: 2, front: "February", back: "0" },
  { id: 3, front: "March", back: "0" },
  { id: 4, front: "April", back: "3" },
  { id: 5, front: "May", back: "5" },
  { id: 6, front: "June", back: "1" },
  { id: 7, front: "July", back: "3" },
  { id: 8, front: "August", back: "6" },
  { id: 9, front: "September", back: "2" },
  { id: 10, front: "October", back: "4" },
  { id: 11, front: "November", back: "0" },
  { id: 12, front: "December", back: "2" },
];

export const doomsdayCenturyData: FlashcardData[] = [
  { id: 1, front: "17xx", back: "0" },
  { id: 2, front: "18xx", back: "5" },
  { id: 3, front: "19xx", back: "3" },
  { id: 4, front: "20xx", back: "2" },
  { id: 5, front: "21xx", back: "0" },
  { id: 6, front: "22xx", back: "5" },
  { id: 7, front: "23xx", back: "3" },
  { id: 8, front: "24xx", back: "2" },
];

export const doomsdayYearOfCenturyData: FlashcardData[] = [
  { id: 1, front: "xx00", back: "0" },
  { id: 2, front: "xx04", back: "5" },
  { id: 3, front: "xx08", back: "3" },
  { id: 4, front: "xx12", back: "1" },
  { id: 5, front: "xx16", back: "6" },

  { id: 6, front: "xx20", back: "4" },
  { id: 7, front: "xx24", back: "2" },
  { id: 8, front: "xx28", back: "0" },
  { id: 9, front: "xx32", back: "5" },
  { id: 10, front: "xx36", back: "3" },

  { id: 11, front: "xx40", back: "1" },
  { id: 12, front: "xx44", back: "6" },
  { id: 13, front: "xx48", back: "4" },
  { id: 14, front: "xx52", back: "2" },
  { id: 15, front: "xx56", back: "0" },

  { id: 16, front: "xx60", back: "5" },
  { id: 17, front: "xx64", back: "3" },
  { id: 18, front: "xx68", back: "1" },
  { id: 19, front: "xx72", back: "6" },
  { id: 20, front: "xx76", back: "4" },

  { id: 21, front: "xx80", back: "2" },
  { id: 22, front: "xx84", back: "0" },
  { id: 23, front: "xx88", back: "5" },
  { id: 24, front: "xx92", back: "3" },
  { id: 25, front: "xx96", back: "1" },
];
