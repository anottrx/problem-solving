// 프로그래머스 짝수는 싫어요 https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  return Array.from(Array(n + 1).keys())
    .sort((a, b) => a - b)
    .filter((num) => num % 2 === 1);
}
