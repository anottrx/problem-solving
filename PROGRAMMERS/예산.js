// 프로그래머스 예산 https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
}
