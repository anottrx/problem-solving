// 프로그래머스 콜라 문제 https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (true) {
    if (n < a) break;
    answer += Math.floor(n / a) * b;
    n = Math.floor(n % a) + Math.floor(n / a) * b;
  }
  return answer;
}
