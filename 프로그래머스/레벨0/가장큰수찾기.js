// 프로그래머스 가장 큰 수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  const copy = [...array];
  copy.sort((a, b) => b - a);
  return [copy[0], array.indexOf(copy[0])];
}
