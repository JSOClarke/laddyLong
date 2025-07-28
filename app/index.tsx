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
  monthCompletedID: number[];
  centuryCompletedID: number[];
  yearOfCenturyCompletedID: number[];
}

export default function Index() {
  const { setCurrentDeck, userProgress, isCompleted } = useDeckStore();

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
            disabled={!isCompleted("monthCompletedID", 1)}
            onPress={() => handleMonthPress(doomsdayMonthData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Month</Text>
            {!isCompleted("monthCompletedID", 1) && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayMonthDecks.map((deck, idx) => (
            <TouchableOpacity
              style={[
                styles.extraMonthButton,
                {
                  backgroundColor: isCompleted("monthCompletedID", deck.id)
                    ? "white"
                    : "gray",
                },
              ]}
              key={idx}
              disabled={!isCompleted("monthCompletedID", deck.id)}
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
            disabled={!isCompleted("centuryCompletedID", 1)}
            onPress={() => handleCenturyPress(doomsdayCenturyData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Century</Text>
            {!isCompleted("centuryCompletedID", 1) && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayCenturyDecks.map((deck, idx) => (
            <TouchableOpacity
              style={[
                styles.extraMonthButton,
                {
                  backgroundColor: isCompleted("centuryCompletedID", deck.id)
                    ? "white"
                    : "gray",
                },
              ]}
              key={idx}
              disabled={!isCompleted("centuryCompletedID", deck.id)}
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
            disabled={!isCompleted("yearOfCenturyCompletedID", 1)}
            onPress={() => handleYearOfCenturyPress(doomsdayYearOfCenturyData)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Year of Century</Text>
            {!isCompleted("yearOfCenturyCompletedID", 1) && (
              <Ionicons name="lock-closed" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.partsContainer}>
          {doomsdayYearOfCenturyDecks.map((deck, idx) => (
            <TouchableOpacity
              style={[
                styles.extraMonthButton,
                {
                  backgroundColor: isCompleted(
                    "yearOfCenturyCompletedID",
                    deck.id
                  )
                    ? "white"
                    : "gray",
                },
              ]}
              key={idx}
              disabled={!isCompleted("yearOfCenturyCompletedID", deck.id)}
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
