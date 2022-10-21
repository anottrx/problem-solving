// 프로그래머스 배열의 평균값 https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;
}
