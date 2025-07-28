import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashcardViewer from "./components/FlashcardViewer";
import AnswerPrompts from "./components/AnswerPrompts";
import {
  doomsdayMonthData,
  doomsdayYearOfCenturyData,
  doomsdayCenturyData,
  flashcardData,
  FlashcardData,
} from "../mockData/testData";
import { useEffect, useState } from "react";
import { router } from "expo-router";

interface AnswerPrompt {
  id: number;
  isEasy: boolean;
}

export default function DeckViewer() {
  const [currentFlashcard, setCurrentFlashcard] =
    useState<FlashcardData | null>(null);
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  const [isEasy, setIsEasy] = useState<boolean | null>(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [answerPrompts, setAnswerPrompts] = useState<AnswerPrompt[]>([]);
  const [currentDeckLength, setCurrentDeckLength] = useState<number>(0);
  const [currentDeck, setCurrentDeck] = useState<FlashcardData[]>([]);

  function handleFinish() {
    router.push({
      pathname: "/resultsPage",
      params: {
        answerPrompts: JSON.stringify(answerPrompts),
        currentDeck: JSON.stringify(currentDeck),
      },
    });
  }

  function handleAnswer(isEasy: boolean) {
    if (!currentFlashcard?.id) return;

    setIsEasy(isEasy);
    setIsNextClicked(false);
    setCurrentFlashcard(currentDeck[currentFlashcardIndex + 1]);
    setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    setAnswerPrompts((prev) => [...prev, { id: currentFlashcard.id, isEasy }]);
  }

  function handleRetry() {
    setCurrentFlashcard(currentDeck[0]);
    setCurrentFlashcardIndex(0);
    setAnswerPrompts([]);
    setIsNextClicked(false);
    setIsEasy(null);
  }

  useEffect(() => {
    setCurrentDeck(doomsdayMonthData);
    setCurrentDeckLength(doomsdayMonthData.length);
    setCurrentFlashcard(doomsdayMonthData[0]);
    setCurrentFlashcardIndex(0);
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>LaddyLong</Text>
      <Text style={styles.subtitle}>
        A app for language learning, like ANKI But a little worse
      </Text>
      <View style={styles.flashcardViewerContainer}>
        <FlashcardViewer
          currentFlashcard={currentFlashcard}
          isNextClicked={isNextClicked}
          currentFlashcardIndex={currentFlashcardIndex}
          currentDeckLength={currentDeckLength}
        />
      </View>
      <View style={styles.answerPromptsContainer}>
        <AnswerPrompts
          isNextClicked={isNextClicked}
          setIsNextClicked={setIsNextClicked}
          isEasy={isEasy}
          setIsEasy={setIsEasy}
          handleAnswer={handleAnswer}
          currentFlashcardIndex={currentFlashcardIndex}
          currentDeckLength={currentDeckLength}
          handleFinish={handleFinish}
          handleRetry={handleRetry}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
  flashcardViewerContainer: {
    borderWidth: 1,
    borderColor: "blue",
    alignSelf: "center",
    width: 350,
    height: 500,
    marginBottom: 20,
  },
  answerPromptsContainer: {
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "center",
    width: 350,
    height: 200,
  },
});
