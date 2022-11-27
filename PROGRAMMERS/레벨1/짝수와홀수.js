// 프로그래머스 짝수와 홀수 https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  let answer = "";
  answer = Math.abs(num) % 2 === 1 ? "Odd" : "Even";
  return answer;
}
