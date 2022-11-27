// 프로그래머스 명예의 전당 (1) https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const scores = [];
  return score.map((value, index) => {
    if (scores.length < k) scores.push(value);
    else if (Math.min(...scores) < value) {
      scores.pop();
      scores.push(value);
    }
    scores.sort((a, b) => b - a);
    return Math.min(...scores);
  });
}
