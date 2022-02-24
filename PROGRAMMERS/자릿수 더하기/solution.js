// 프로그래머스 자릿수 더하기 https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let answer = 0;

  answer = String(n)
    .split("")
    .reduce((prev, cur) => prev + Number(cur), answer);

  return answer;
}
