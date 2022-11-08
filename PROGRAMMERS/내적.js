// 프로그래머스 내적 https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((prev, cur, index) => prev + cur * b[index], 0);
}
