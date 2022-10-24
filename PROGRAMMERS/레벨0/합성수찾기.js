// 프로그래머스 합성수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  if (n < 4) return 0;

  let answer = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
