// 프로그래머스 자릿수 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((prev, cur) => prev + Number(cur), 0);
}
