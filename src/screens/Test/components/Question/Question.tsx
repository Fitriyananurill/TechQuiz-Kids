import { Heading } from "../../../../components";
import { Question as QuestionType } from "../../../../data/types";
import { Options } from "./components";
import { Image, ScrollView, StyleSheet, View } from "react-native";

interface Props {
  question: QuestionType;
  onAnswered: (correct: boolean) => void;
}

export function Question({ question, onAnswered }: Props) {
  return (
    <ScrollView>
      <View style={questionStyle.root}>
        <Heading text={question.question} fontSize={20} />
        {question.image ? (
          <View style={[questionStyle.aspectRatio]}>
            <Image
              style={questionStyle.image}
              source={
                typeof question.image === "number"
                  ? question.image // ✅ require('./computer.jpg')
                  : { uri: question.image?.uri } // ✅ { uri: 'https://...' }
              }
            />
          </View>
        ) : null}
        <Options
          options={question.options}
          description={question.answerDescription}
          onAnswered={onAnswered}
        />
      </View>
    </ScrollView>
  );
}

const questionStyle = StyleSheet.create({
  root: {
    padding: 16,
    gap: 8,
  },
  aspectRatio: {
    aspectRatio: 2 / 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
    borderRadius: 12,
    borderColor: "#e5e7eb",
    borderWidth: 1,
  },
});
