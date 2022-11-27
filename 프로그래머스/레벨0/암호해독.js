// 프로그래머스 암호 해독 https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}
