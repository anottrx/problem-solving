// 프로그래머스 최댓값 만들기(1) https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .filter((_, index) => index < 2)
    .reduce((prev, cur) => prev * cur, 1);
}
