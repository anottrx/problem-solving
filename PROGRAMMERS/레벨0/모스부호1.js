// 프로그래머스 모스부호(1) https://school.programmers.co.kr/learn/courses/30/lessons/120838

const morseMap = new Map();
[
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
].forEach((el, index) => morseMap.set(el, String.fromCharCode(97 + index)));

function solution(letter) {
  return letter
    .split(" ")
    .map((alpha) => morseMap.get(alpha))
    .join("");
}
