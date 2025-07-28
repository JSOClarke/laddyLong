import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ResultsTable from "./components/ResultsTable";
import { FlashcardData } from "@/mockData/testData";

interface AnswerPrompt {
  id: number;
  isEasy: boolean;
}

export default function ResultsPage() {
  const { answerPrompts, currentDeck } = useLocalSearchParams();

  const parsedAnswerPrompts = JSON.parse(
    answerPrompts as string
  ) as AnswerPrompt[];
  const parsedCurrentDeck = JSON.parse(
    currentDeck as string
  ) as FlashcardData[];
  return (
    <View style={styles.container}>
      <ResultsTable
        answerPrompts={parsedAnswerPrompts}
        currentDeck={parsedCurrentDeck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
