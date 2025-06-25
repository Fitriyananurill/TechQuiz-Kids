import { Question, Test } from "./types";
import { Image } from "react-native";


export const FlagTest: Test = {
  id: "id:test/flag",
  title: "Komputer",
  testName: "flags",
  numOfQuestions: 10,
  duration: 10,
  image: {
  uri: Image.resolveAssetSource(require('./komputer.png')).uri,
  alt: "Gambar komputer",
  },
};

export const flagQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Apa nama bagian komputer yang tampilannya seperti layar TV?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/0", text: "CPU", isCorrect: false },
      { id: "id:option/1", text: "Monitor", isCorrect: true },
      { id: "id:option/2", text: "Mouse", isCorrect: false },
      { id: "id:option/3", text: "Keyboard", isCorrect: false },
    ],
    answerDescription:
      "Monitor memang bagian komputer yang tampilannya seperti layar TV.",
    hint: "Monitor memang bagian komputer yang tampilannya seperti layar TV.",
  },
  {
    id: "id:question/1",
    question:
      "Apa nama alat yang digunakan untuk mengetik di komputer?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/4", text: "Keyboard", isCorrect: true},
      { id: "id:option/5", text: "Mouse", isCorrect: false },
      { id: "id:option/6", text: "Printer", isCorrect: false },
      { id: "id:option/7", text: "CPU", isCorrect: false },
    ],
    answerDescription:
      "Keyboard adalah alat yang digunakan untuk mengetik di komputer.",
    hint: "Keyboard adalah alat yang digunakan untuk mengetik di komputer.",
  },
  {
    id: "id:question/2",
    question:
      "Alat apa yang digunakan untuk menggerakkan kursor di layar?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/8", text: "Monitor", isCorrect: false },
      { id: "id:option/9", text: "Printer", isCorrect: false },
      { id: "id:option/10", text: "Mouse", isCorrect: true },
      { id: "id:option/11", text: "Speaker", isCorrect: false },
    ],
    answerDescription:
      "Mouse memang digunakan untuk menggerakkan kursor di layar.",
    hint: "Mouse memang digunakan untuk menggerakkan kursor di layar.",
  },
  {
    id: "id:question/3",
    question:
      "Apa nama kotak besar yang berisi mesin komputer?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/12", text: "Monitor", isCorrect: false },
      { id: "id:option/13", text: "CPU", isCorrect: true },
      { id: "id:option/14", text: "Keyboard", isCorrect: false },
      { id: "id:option/15", text: "Mouse", isCorrect: false },
    ],
    answerDescription:
      "CPU adalah kotak besar yang berisi mesin komputer.",
    hint: "CPU adalah kotak besar yang berisi mesin komputer.",
  },
  {
    id: "id:question/4",
    question:
      "Bagian komputer yang mengeluarkan suara disebut?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/16", text: "CPU", isCorrect: false },
      { id: "id:option/17", text: "Printer", isCorrect: false },
      { id: "id:option/18", text: "Speaker", isCorrect: true },
      { id: "id:option/19", text: "Monitor", isCorrect: false },
    ],
    answerDescription:
      "Speaker memang bagian komputer yang mengeluarkan suara.",
    hint: "Speaker memang bagian komputer yang mengeluarkan suara.",
  },
  {
    id: "id:question/5",
    question:
      "Alat apa yang digunakan untuk mencetak hasil kerja di komputer?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/20", text: "Printer", isCorrect: true },
      { id: "id:option/21", text: "Monitor", isCorrect: false },
      { id: "id:option/22", text: "CPU", isCorrect: false },
      { id: "id:option/23", text: "Mouse", isCorrect: false },
    ],
    answerDescription:
      "Printer digunakan untuk mencetak hasil kerja di komputer.",
    hint: "Printer digunakan untuk mencetak hasil kerja di komputer.",
  },
  {
    id: "id:question/6",
    question:
      "Apa nama kabel yang menghubungkan komputer dengan listrik?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/24", text: "Kabel HDMI", isCorrect: false },
      { id: "id:option/25", text: "Kabel Power", isCorrect: true },
      { id: "id:option/26", text: "Kabel USB", isCorrect: false },
      { id: "id:option/27", text: "Kabel Mouse", isCorrect: false },
    ],
    answerDescription:
      "Kabel power digunakan untuk menghubungkan komputer ke listrik.",
    hint: "Kabel power digunakan untuk menghubungkan komputer ke listrik.",
  },
  {
    id: "id:question/7",
    question:
      "Apa nama bagian kecil yang bisa diputar untuk mengatur suara di speaker?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/28", text: "Saklar", isCorrect: false },
      { id: "id:option/29", text: "Roda Suara (volume knob)", isCorrect: true },
      { id: "id:option/30", text: "Tombol Reset", isCorrect: false },
      { id: "id:option/31", text: "Keyboard", isCorrect: false },
    ],
    answerDescription:
      "Roda suara atau volume knob digunakan untuk mengatur suara di speaker.",
    hint: "Roda suara atau volume knob digunakan untuk mengatur suara di speaker.",
  },
  {
    id: "id:question/8",
    question:
      "Bagian komputer mana yang membantu kita mendengar suara melalui telinga langsung?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/32", text: "Speaker", isCorrect: false },
      { id: "id:option/33", text: "Handphone", isCorrect: true },
      { id: "id:option/34", text: "Monitor", isCorrect: false },
      { id: "id:option/35", text: "CPU", isCorrect: false },
    ],
    answerDescription:
      "Headphone digunakan untuk mendengar suara langsung lewat telinga.",
    hint: "Headphone digunakan untuk mendengar suara langsung lewat telinga.",
  },
  {
    id: "id:question/9",
    question:
      "Bagian komputer yang digunakan untuk melihat gambar dan video adalah?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/36", text: "Mouse", isCorrect: false },
      { id: "id:option/37", text: "CPU", isCorrect: false },
      { id: "id:option/38", text: "Monitor", isCorrect: true },
      { id: "id:option/39", text: "Printer", isCorrect: false },
    ],
    answerDescription:
      "Monitor digunakan untuk melihat gambar dan video.",
    hint: "Monitor digunakan untuk melihat gambar dan video.",
  },
];
