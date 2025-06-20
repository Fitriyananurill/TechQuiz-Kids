import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Heading } from "../../components";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ResultsCard } from "./components";

interface QuizResult {
  id: string;
  testName: string;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number;
}

export function RiwayatScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "quizResults"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        testName: doc.data().testName,
        correctAnswers: doc.data().correctAnswers,
        totalQuestions: doc.data().totalQuestions,
        timeTaken: doc.data().timeTaken,
      }));
      setQuizHistory(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header row */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("./assets/kembali-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Heading text="Riwayat" fontSize={24} color="#000000" />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : quizHistory.length === 0 ? (
          <Text style={{ alignSelf: "center", marginTop: 20 }}>
            Belum ada riwayat quiz.
          </Text>
        ) : (
          quizHistory.map((quiz) => (
            <ResultsCard
              key={quiz.id}
              correctAnswers={quiz.correctAnswers}
              totalQuestions={quiz.totalQuestions}
              testName={quiz.testName}
              timeTaken={quiz.timeTaken}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFF3FF",
    paddingTop: 40,
  },
  headerWrapper: {
    position: "relative",
    height: 60,
    justifyContent: "center",
    marginBottom: 16,
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 16,
    zIndex: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  titleContainer: {
    alignItems: "center",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
