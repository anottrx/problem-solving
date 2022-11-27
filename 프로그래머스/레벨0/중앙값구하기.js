// 프로그래머스 중앙값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
