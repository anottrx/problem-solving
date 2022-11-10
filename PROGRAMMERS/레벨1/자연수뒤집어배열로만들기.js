// 프로그래머스 자연수 뒤집어 배열로 만들기 https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  let answer = [];
  answer = String(n)
    .split("")
    .reverse()
    .map((x) => Number(x));
  return answer;
}
