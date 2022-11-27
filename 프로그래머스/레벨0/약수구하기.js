// 프로그래머스 약수 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
  return Array.from(Array(n + 1).keys()).filter(
    (num, index) => index > 0 && n % num === 0
  );
}
