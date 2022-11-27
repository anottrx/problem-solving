// 프로그래머스 공 던지기 https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  return numbers[(k * 2 - 2) % numbers.length];
}
