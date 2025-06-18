import { FlatList, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data";

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      {/* Background Image */}
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_vector-1734446350528-6a2ea88469d5?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Ganti dengan URL gambar Anda
        style={homeScreen.backgroundImage}
        resizeMode="cover"
      />
      
      <ScrollView>
        <View style={homeScreen.rootContainer}>
          <WelcomeCard />

          <Text style={homeScreen.title}>Pilihan Quiz</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  navigation.navigate("Test", {
                    title: item.title,
                    testName: item.testName,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
      <Heading text="TechQuiz Kids" fontSize={24} color="#000000" />
      <Text style={welcomeCard.text}>
        Selamat datang di TechQuiz Kids, aplikasi kuis seru seputar teknologi yang dirancang khusus untuk anak anak. 
      </Text>
    </View>
  );
}

const homeScreen = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Untuk memastikan gambar berada di belakang konten
    opacity: 0.5, // Sesuaikan opacity sesuai kebutuhan
  },
});

const welcomeCard = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    gap: 16,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#000000",
    fontWeight: "500",
  },
});