import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import { FlashcardData } from "../../mockData/testData";

interface FlashcardViewerProps {
  currentFlashcard: FlashcardData | null;
  isNextClicked: boolean;
  currentFlashcardIndex: number;
  currentDeckLength: number;
}

export default function FlashcardViewer({
  currentFlashcard,
  isNextClicked,
  currentFlashcardIndex,
  currentDeckLength,
}: FlashcardViewerProps) {
  return (
    <View style={styles.container}>
      {currentFlashcardIndex < currentDeckLength && (
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>
            {currentFlashcardIndex + 1} / {currentDeckLength}
          </Text>
        </View>
      )}
      {currentFlashcardIndex < currentDeckLength && (
        <Text style={styles.frontText}>{currentFlashcard?.front}</Text>
      )}
      {isNextClicked && currentFlashcardIndex < currentDeckLength && (
        <Text style={styles.backText}>{currentFlashcard?.back}</Text>
      )}
      {currentFlashcardIndex === currentDeckLength && (
        <Text style={styles.title}>You have finished the deck!</Text>
      )}
      {isNextClicked && currentFlashcardIndex < currentDeckLength && (
        <TouchableOpacity
          style={styles.pronunciationButton}
          onPress={() =>
            Linking.openURL(
              `https://youglish.com/pronounce/${currentFlashcard?.back}/dutch`
            )
          }
        >
          <Text style={styles.pronunciationButtonText}>Open Pronunciation</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  numberContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  frontText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  backText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  pronunciationButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  pronunciationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
});
