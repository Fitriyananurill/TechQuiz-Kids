import { Question, Test } from "./types";
import { Image } from "react-native";

export const SolarSystemTest: Test = {
  id: "id:test/solar-system",
  title: "Keyboard",
  testName: "solarSystem",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: Image.resolveAssetSource(require('./keyboard.png')).uri,
    alt: "Gambar komputer",
    },
};

export const solarSystemQuestions: Question[] = [
  {
    id: "id:question/10",
    question: "Tombol mana yang digunakan untuk mengetik huruf kapital?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/40", text: "Caps Lock", isCorrect: true },
      { id: "id:option/41", text: "Spacebar", isCorrect: false },
      { id: "id:option/42", text: "Enter", isCorrect: false },
      { id: "id:option/43", text: "Tab", isCorrect: false },
    ],
    answerDescription:
      "Shift memang digunakan untuk mengetik huruf kapital sambil menekan hurufnya.",
    hint: "This planet is often studied for potential signs of past life.",
  },
  {
    id: "id:question/11",
    question: "Apa nama tombol panjang di bagian bawah keyboard?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/44", text: "Shift", isCorrect: false },
      { id: "id:option/45", text: "Tab", isCorrect: false },
      { id: "id:option/46", text: "Spacebar", isCorrect: true },
      { id: "id:option/47", text: "Esc", isCorrect: false },
    ],
    answerDescription: "Spacebar adalah tombol panjang yang digunakan untuk memberi jarak antar kata.",
    hint: "It has extreme temperatures, ranging from extremely hot to extremely cold.",
  },
  {
    id: "id:question/12",
    question: "Tombol mana yang dipakai untuk menghapus huruf?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/48", text: "Tab", isCorrect: false },
      { id: "id:option/49", text: "Backspace", isCorrect: true },
      { id: "id:option/50", text: "Shift", isCorrect: false },
      { id: "id:option/51", text: "Ctrl", isCorrect: false },
    ],
    answerDescription:
      "Backspace digunakan untuk menghapus huruf di sebelah kiri kursor.",
    hint: "It is a gas giant and has a strong magnetic field.",
  },
  {
    id: "id:question/13",
    question: "Apa nama tombol untuk pindah ke baris baru saat mengetik?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/52", text: "Esc", isCorrect: false },
      { id: "id:option/53", text: "Spacebar", isCorrect: false },
      { id: "id:option/54", text: "Enter", isCorrect: true },
      { id: "id:option/55", text: "Alt", isCorrect: false },
    ],
    answerDescription:
      "Tombol Enter dipakai untuk pindah ke baris baru.",
    hint: "These rings are made up of ice, rocks, and dust particles.",
  },
  {
    id: "id:question/14",
    question:
      "Simbol mana yang ada di tombol angka 2?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/56", text: "%", isCorrect: false },
      { id: "id:option/57", text: "#", isCorrect: false },
      { id: "id:option/58", text: "@", isCorrect: true },
      { id: "id:option/59", text: "&", isCorrect: false },
    ],
    answerDescription:
      "Simbol @ memang ada di tombol angka 2 (dengan menekan Shift + 2).",
    hint: "It is the second planet from the Sun and is similar in size and composition to Earth.",
  },
  {
    id: "id:question/15",
    question:
      "Huruf mana yang ada di sebelah kanan tombol \"A\"?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/60", text: "S", isCorrect: true },
      { id: "id:option/61", text: "D", isCorrect: false },
      { id: "id:option/62", text: "Q", isCorrect: false },
      { id: "id:option/63", text: "Z", isCorrect: false },
    ],
    answerDescription:
      "Di sebelah kanan huruf A ada huruf S.",
    hint: "It is an ice giant and has a unique tilt in its rotational axis.",
  },
  {
    id: "id:question/16",
    question: "Simbol apa yang sering ada di tombol angka 1?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/64", text: "@", isCorrect: false },
      { id: "id:option/65", text: "!", isCorrect: true },
      { id: "id:option/66", text: "#", isCorrect: false },
      { id: "id:option/67", text: "$", isCorrect: false },
    ],
    answerDescription:
      "Simbol ! ada di tombol angka 1 (bisa ditekan dengan Shift + 1).",
    hint: "It is the only known planet to support life.",
  },
  {
    id: "id:question/17",
    question:
      "Tombol mana yang digunakan untuk memberi spasi?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/68", text: "Tab", isCorrect: false },
      { id: "id:option/69", text: "Spacebar", isCorrect: true },
      { id: "id:option/70", text: "Esc", isCorrect: false },
      { id: "id:option/71", text: "Ctrl", isCorrect: false },
    ],
    answerDescription:
      "Spacebar digunakan untuk membuat spasi saat mengetik.",
    hint: "This storm system is similar to Jupiter's Great Red Spot.",
  },
  {
    id: "id:question/18",
    question: "Tombol mana yang digunakan untuk keluar dari suatu menu atau aplikasi?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/72", text: "Tab", isCorrect: false },
      { id: "id:option/73", text: "Esc", isCorrect: true },
      { id: "id:option/74", text: "Ctrl", isCorrect: false },
      { id: "id:option/75", text: "Shift", isCorrect: false },
    ],
    answerDescription: "Tombol Esc digunakan untuk keluar dari menu atau membatalkan perintah.",
    hint: "It is often called Earth's 'sister planet' due to their similar size and composition.",
  },
  {
    id: "id:question/19",
    question: "Apa fungsi tombol \"Caps Lock\" di keyboard?",
    image: require('./computer.jpg'),
    options: [
      { id: "id:option/72", text: "Membuat semua huruf kecil", isCorrect: false },
      { id: "id:option/73", text: "Membuat semua huruf besar", isCorrect: true },
      { id: "id:option/74", text: "Menghapus semua huruf", isCorrect: false },
      { id: "id:option/75", text: "Memberi jarak antar huruf", isCorrect: false },
    ],
    answerDescription: "Tombol Caps Lock digunakan untuk membuat huruf kapital.",
    hint: "It is often called Earth's 'sister planet' due to their similar size and composition.",
  },
];
