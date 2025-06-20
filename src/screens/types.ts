import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TestName } from "../data/types";

export type BottomTabParamList = {
  HomeTab: undefined;
  SavedTab: undefined;
  StatsTab: undefined;
  SettingsTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Test: {
    title: string;
    testName: TestName;
  };
  Result: {
    testName: string;
    correctAnswers: number;
    totalQuestions: number;
    timeTaken: number;
  };
  Riwayat:undefined
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Home"
>;
export type TestScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Test"
>;
export type ResultScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Result"
>;
export type RiwayatScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Riwayat"
>;

