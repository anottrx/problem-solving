// 프로그래머스 수박수박수박수박수박수? https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat((n - 1) / 2) + "수";
}

function befSolution(n) {
  var answer = "";
  const nn = Math.floor(n / 2);
  for (let i = 0; i < nn; i++) {
    answer = answer + "수박";
  }
  if (n % 2 === 1) answer = answer + "수";
  return answer;
}
