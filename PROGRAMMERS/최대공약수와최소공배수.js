// 프로그래머스 최대공약수와 최소공배수 https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  const answer = [];
  let b = Math.max(n, m);
  let a = Math.min(n, m);
  let gcd = 1;
  for (let i = a; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      break;
    }
  }
  answer.push(gcd);
  answer.push((a * b) / gcd);
  return answer;
}
