import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface AnswerPromptsProps {
  isNextClicked: boolean;
  setIsNextClicked: (isNextClicked: boolean) => void;
  isEasy: boolean | null;
  setIsEasy: (isEasy: boolean) => void;
  handleAnswer: (isEasy: boolean) => void;
  currentFlashcardIndex: number;
  currentDeckLength: number;
  handleFinish: () => void;
  handleRetry: () => void;
}

export default function AnswerPrompts({
  isNextClicked,
  setIsNextClicked,
  isEasy,
  setIsEasy,
  handleAnswer,
  currentFlashcardIndex,
  currentDeckLength,
  handleFinish,
  handleRetry,
}: AnswerPromptsProps) {
  return (
    <View style={styles.container}>
      {!isNextClicked && currentFlashcardIndex < currentDeckLength && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsNextClicked(true)}
        >
          <Text>Reveal Answer</Text>
        </TouchableOpacity>
      )}
      {isNextClicked && currentFlashcardIndex < currentDeckLength && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAnswer(true)}
          >
            <Text>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAnswer(false)}
          >
            <Text>Hard</Text>
          </TouchableOpacity>
        </>
      )}
      {currentFlashcardIndex === currentDeckLength && (
        <View style={styles.endOfDeckContainer}>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resultsButton} onPress={handleFinish}>
            <Text style={styles.resultsButtonText}>See Results</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  endOfDeckContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  endOfDeckText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  retryButton: {
    borderWidth: 1,
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    flex: 1,
    height: "100%",
  },
  resultsButton: {
    borderWidth: 1,
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    flex: 1,
    height: "100%",
  },
  resultsButtonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  retryButtonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
