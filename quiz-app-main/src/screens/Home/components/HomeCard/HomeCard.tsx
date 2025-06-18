import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Heading } from "../../../../components";
import { Image as ImageType } from "../../../../data/types";

export interface Props {
  title: string;
  image?: ImageType;
  numOfQuestions: number;
  duration: number;
  index: number;
  onPress: () => void;
}

export function HomeCard({
  title,
  image,
  numOfQuestions,
  duration,
  index,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[homeCard.root, { marginRight: index % 2 === 0 ? 8 : 0 }]}>
      <View style={homeCard.aspectRatio}>
        <Image
          style={homeCard.image}
          source={{
            uri: image?.uri,
          }}
          alt={image?.alt}
        />
      </View>
      <View style={homeCard.textContainer}>
        <Heading text={title} fontSize={18} />
        <View style={homeCard.footer}>
          <Text style={homeCard.footerText}>{numOfQuestions} Pertanyaan</Text>
          <Text style={homeCard.footerText}>{duration} Menit</Text>
        </View>
      </View>
    </Pressable>
  );
}

const homeCard = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#cbd2d9",
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  aspectRatio: {
    aspectRatio: 16 / 7,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  footerText: {
    fontSize: 9,
    color: "#718096",
  },
});
