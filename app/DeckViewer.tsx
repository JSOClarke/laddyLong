import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashcardViewer from "./components/FlashcardViewer";
import AnswerPrompts from "./components/AnswerPrompts";
import { Ionicons } from "@expo/vector-icons";
import { FlashcardData } from "../mockData/testData";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useDeckStore } from "./store/deckStore";

interface AnswerPrompt {
  id: number;
  isEasy: boolean;
}

interface UserProgress {
  monthCompleted: boolean;
  centuryCompleted: boolean;
  yearOfCenturyCompleted: boolean;
}

export default function DeckViewer() {
  const { currentDeck, currentDeckName } = useDeckStore();
  const [currentFlashcard, setCurrentFlashcard] =
    useState<FlashcardData | null>(null);
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  const [isEasy, setIsEasy] = useState<boolean | null>(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [answerPrompts, setAnswerPrompts] = useState<AnswerPrompt[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    monthCompleted: true,
    centuryCompleted: false,
    yearOfCenturyCompleted: false,
  });

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
    if (currentDeck.length > 0) {
      setCurrentFlashcard(currentDeck[0]);
    }
  }, [currentDeck]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>LaddyLong</Text>
      </View>
      <Text style={styles.subtitle}>
        A app for language learning, like ANKI But a little worse
      </Text>
      <View style={styles.flashcardViewerContainer}>
        <FlashcardViewer
          currentFlashcard={currentFlashcard}
          isNextClicked={isNextClicked}
          currentFlashcardIndex={currentFlashcardIndex}
          currentDeckLength={currentDeck.length}
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
          currentDeckLength={currentDeck.length}
          handleFinish={handleFinish}
          handleRetry={handleRetry}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6D57FC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
  flashcardViewerContainer: {
    alignSelf: "center",
    width: 350,
    height: 500,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  answerPromptsContainer: {
    alignSelf: "center",
    width: 350,
    height: 200,
  },
});
