// 프로그래머스 숫자 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  return num.toString().indexOf(k) === -1 ? -1 : num.toString().indexOf(k) + 1;
}
