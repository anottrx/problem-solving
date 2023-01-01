// 프로그래머스 n^2 배열 자르기 https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n) + 1, (i % n) + 1));
  }
  return answer;
}
