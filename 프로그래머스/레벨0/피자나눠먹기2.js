// 프로그래머스 피자 나눠 먹기 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  let div = 1;
  for (let i = 2; i <= Math.min(n, 6); i++) {
    if (n % i === 0 && 6 % i === 0) div = i;
  }
  return Math.floor(n / div);
}
