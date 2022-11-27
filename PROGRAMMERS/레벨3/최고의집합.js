// 프로그래머스 최고의 집합 https://school.programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  if (s <= n) return [-1];
  if (s % n === 0) return new Array(n).fill(s / n);

  const answer = [];
  while (n > 0) {
    if (s % n === 0) {
      // for (let i = 0; i < n; i++) {
      //   answer.push(s / n);
      // }
      [...new Array(n)].forEach(() => answer.push(s / n));
      break;
    }
    answer.push(Math.floor(s / n));
    s = s - Math.floor(s / n);
    n--;
  }
  return answer;
}
