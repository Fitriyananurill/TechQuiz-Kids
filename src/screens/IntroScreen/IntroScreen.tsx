import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";

type Props = NativeStackScreenProps<HomeStackParamList, "Intro">;

export function IntroScreen({ navigation, route }: Props) {
  const { title, testName } = route.params;

  return (
    <ImageBackground
      source={require("./intro.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("./kembali-icon.png")} 
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Modul: {title}</Text>
        <View style={styles.box}>
          <Text style={styles.description}>
            Mari berkenalan dengan {title}
          </Text>
        </View>
        <Image
          source={require("./work.png")} 
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Test", {
              title,
              testName,
            })
          }
        >
          <Text style={styles.buttonText}>Belajar Teknologi dengan Cara Seru, {"\n"}Main Kuis Yuk!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0f172a",
    textAlign: "center",
  },
  description: {
  fontSize: 16,
  textAlign: "center",
  color: "#000",
  lineHeight: 40,
  includeFontPadding: false, 
  padding: 0,
  fontWeight: "900",
  },
  button: {
    backgroundColor: "#00E450",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 2,         
    borderColor: "#000000", 
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  box: {
  backgroundColor: "#ffffff",
  borderRadius: 10,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginBottom: 24,
  alignSelf: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 32,
  },

});