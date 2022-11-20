// 프로그래머스 과일 장수 https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  score.sort((a, b) => a - b);
  let answer = 0;
  for (let i = score.length - 1; i >= 0; i = i - m) {
    const temp = score.slice(i - m + 1, i + 1);
    if (temp.length > 0) answer += Math.min(...temp) * m;
  }
  return score.length < m ? 0 : answer;
}
