// 프로그래머스 양꼬치 https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}
