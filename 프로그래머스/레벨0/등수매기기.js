// 프로그래머스 등수 매기기 https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  score = score.map((v) => v[0] + v[1]);
  const sortedScore = [...score];
  sortedScore.sort((a, b) => b - a);
  let index = 1,
    jump = 0;
  sortedScore[0] = [sortedScore[0]].concat([1]);
  for (let i = 1; i < sortedScore.length; i++) {
    if (sortedScore[i] === sortedScore[i - 1][0]) jump++;
    else {
      index += jump + 1;
      jump = 0;
    }
    sortedScore[i] = [sortedScore[i]].concat([index]);
  }
  return score.map((v) => {
    for (let i = 0; i < sortedScore.length; i++) {
      if (sortedScore[i][0] === v) return sortedScore[i][1];
    }
  });
}
