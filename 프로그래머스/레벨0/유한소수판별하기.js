// 프로그래머스 유한소수 판별하기 https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  for (let i = Math.min(a, b); i >= 2; i--) {
    if (a % i === 0 && b % i === 0) {
      b = b / i;
      break;
    }
  }
  while (true) {
    if (b % 2 === 0) b /= 2;
    else if (b % 5 === 0) b /= 5;
    else break;
  }
  return b === 1 ? 1 : 2;
}
