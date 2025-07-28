import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useDeckStore } from "./store/deckStore";
import {
  doomsdayMonthData,
  doomsdayCenturyData,
  doomsdayYearOfCenturyData,
  FlashcardData,
} from "../mockData/testData";
import { splitIntoDecks } from "./utils";

const doomsdayMonthDecks = splitIntoDecks(doomsdayMonthData);
const doomsdayCenturyDecks = splitIntoDecks(doomsdayCenturyData);
const doomsdayYearOfCenturyDecks = splitIntoDecks(doomsdayYearOfCenturyData);

interface UserProgress {
  monthCompleted: boolean;
  centuryCompleted: boolean;
  yearOfCenturyCompleted: boolean;
}

export default function Index() {
  const { setCurrentDeck } = useDeckStore();
  const [userProgress, setUserProgress] = useState<UserProgress>({
    monthCompleted: true,
    centuryCompleted: false,
    yearOfCenturyCompleted: false,
  });

  const handleMonthPress = (deck: FlashcardData[]) => {
    setCurrentDeck(deck, "Month");
    router.push("/DeckViewer");
  };

  const handleCenturyPress = (deck: FlashcardData[]) => {
    setCurrentDeck(deck, "Century");
    router.push("/DeckViewer");
  };

  const handleYearOfCenturyPress = (deck: FlashcardData[]) => {
    setCurrentDeck(deck, "Year of Century");
    router.push("/DeckViewer");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!userProgress.monthCompleted}
            onPress={() => handleMonthPress(doomsdayMonthData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Month</Text>
            {!userProgress.monthCompleted && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayMonthDecks.map((deck, idx) => (
            <TouchableOpacity
              style={styles.extraMonthButton}
              key={idx}
              disabled={!userProgress.monthCompleted}
              onPress={() => handleMonthPress(deck.cards)}
            >
              <Text style={styles.buttonText}>{idx + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!userProgress.monthCompleted}
            onPress={() => handleMonthPress(doomsdayMonthData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Century</Text>
            {!userProgress.centuryCompleted && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayCenturyDecks.map((deck, idx) => (
            <TouchableOpacity
              style={styles.extraMonthButton}
              key={idx}
              disabled={!userProgress.centuryCompleted}
              onPress={() => handleCenturyPress(deck.cards)}
            >
              <Text style={styles.buttonText}>{idx + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!userProgress.yearOfCenturyCompleted}
            onPress={() => handleYearOfCenturyPress(doomsdayYearOfCenturyData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Year of Century</Text>
            {!userProgress.yearOfCenturyCompleted && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayYearOfCenturyDecks.map((deck, idx) => (
            <TouchableOpacity
              style={styles.extraMonthButton}
              key={idx}
              disabled={!userProgress.yearOfCenturyCompleted}
              onPress={() => handleYearOfCenturyPress(deck.cards)}
            >
              <Text style={styles.buttonText}>{idx + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  partsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#6D57FC",
    paddingTop: 100,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
    width: "90%",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  sectionContainer: {
    flexDirection: "column",
  },
  extraMonthButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
