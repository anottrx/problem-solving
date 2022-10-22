// 프로그래머스 배열 자르기 https://school.programmers.co.kr/learn/courses/30/lessons/120833

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
  // return numbers.splice(num1, num2 - num1 + 1);
}
