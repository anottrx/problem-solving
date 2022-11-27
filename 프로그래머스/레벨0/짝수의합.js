// 프로그래머스 짝수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  return Array.from(Array(n + 1).keys())
    .filter((num) => num % 2 === 0)
    .reduce((prev, cur) => prev + cur, 0);
}
