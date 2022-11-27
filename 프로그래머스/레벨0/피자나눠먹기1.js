// 프로그래머스 피자 나눠 먹기 (1)

function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}
