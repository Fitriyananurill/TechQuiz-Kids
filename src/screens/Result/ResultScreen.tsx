import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ResultsCard, TimeSpentCard, Button } from "./components";
import { SafeAreaBox } from "../../components";
import { ResultScreenProps } from "../types";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { serverTimestamp } from "firebase/firestore";

export function ResultScreen({ navigation, route }: ResultScreenProps) {
  const { correctAnswers, totalQuestions, timeTaken, testName } = route.params;

  useEffect(() => {
    const saveToFirestore = async () => {
      try {
        await addDoc(collection(db, "quizResults"), {
          testName,
          correctAnswers,
          totalQuestions,
          timeTaken,
          createdAt: serverTimestamp(),
        });
        console.log("✅ Data berhasil disimpan ke Firestore!");
      } catch (error) {
        console.error("❌ Gagal menyimpan data ke Firestore:", error);
      }
    };

    saveToFirestore();
  }, []);

  return (
    <SafeAreaBox>
      <View style={results.root}>
        <View style={results.cardContainer}>
          <Text style={results.resultsText}>Hasil Jawaban</Text>
          <ResultsCard
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
          />
          <TimeSpentCard timeTaken={timeTaken} />
        </View>

        <View style={results.buttonContainer}>
          <Button
            text="Kembali ke Beranda"
            textColor="#fafafa"
            backgroundColor="#fbbf24"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaBox>
  );
}

const results = StyleSheet.create({
  root: {
    height: "100%",
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardContainer: {
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    width: "100%",
    gap: 8,
  },
  resultsText: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
  },
});
