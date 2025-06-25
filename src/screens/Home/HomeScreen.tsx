import { FlatList, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data";

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      {/* Background Image */}
      <Image
        source={require('./assets/homescreen.jpg')}
        style={homeScreen.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Navigation Icons */}
      <View style={homeScreen.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image 
            source={require('./assets/home-icon.png')} 
            style={homeScreen.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Riwayat")}>
          <Image 
            source={require('./assets/history-icon.png')}
            style={homeScreen.icon}
          />
        </TouchableOpacity>
      </View>
      
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
                  navigation.navigate("Intro", {
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
    marginTop: 50, 
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
    zIndex: -1,
    opacity: 0.5,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 110,
    padding: 10,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  icon: {
    width: 30,
    height: 30,
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