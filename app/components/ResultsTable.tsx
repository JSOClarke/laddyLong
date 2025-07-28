import { FlatList, StyleSheet, Text, View } from "react-native";
import { FlashcardData } from "../../mockData/testData";

interface AnswerPrompt {
  id: number;
  isEasy: boolean;
}

interface ResultsTableProps {
  answerPrompts: AnswerPrompt[];
  currentDeck: FlashcardData[];
}

export default function ResultsTable({
  answerPrompts,
  currentDeck,
}: ResultsTableProps) {
  console.log(currentDeck);
  function getFlashcard(id: number) {
    return currentDeck.find((flashcard) => flashcard.id === id);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={answerPrompts}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.isEasy ? "lightgreen" : "lightcoral" },
            ]}
          >
            <Text>{item.id}</Text>
            <Text>You answered: </Text>
            <Text>{item.isEasy ? "Easy" : "Hard"}</Text>
            <Text>Back: </Text>
            <Text>{getFlashcard(item.id)?.back}</Text>
          </View>
        )}
      />
      <View style={styles.statsContainer}>
        <Text>Total: {answerPrompts.length}</Text>
        <Text>Easy: {answerPrompts.filter((item) => item.isEasy).length}</Text>
        <Text>Hard: {answerPrompts.filter((item) => !item.isEasy).length}</Text>
        <Text>
          Easy:
          {(
            (answerPrompts.filter((item) => item.isEasy).length /
              answerPrompts.length) *
            100
          ).toFixed(2)}
          %
        </Text>
        <Text>
          Hard:
          {(
            (answerPrompts.filter((item) => !item.isEasy).length /
              answerPrompts.length) *
            100
          ).toFixed(2)}
          %
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "gray",
    paddingVertical: 10,
    backgroundColor: "lightgray",
  },
});
