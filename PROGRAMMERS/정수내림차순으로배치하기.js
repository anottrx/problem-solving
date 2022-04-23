// 프로그래머스 정수 내림차순으로 배치하기 https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  let answer = 0;
  answer = Number(String(n).split("").sort().reverse().join(""));
  return answer;
}