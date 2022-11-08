// 프로그래머스 실패율 https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const answer = [];

  const passCountList = new Array(N + 1).fill(0);
  const stopCountList = new Array(N + 1).fill(0);
  stages.forEach((el) => {
    for (let i = 1; i <= N; i++) {
      if (i <= el) {
        passCountList[i]++;
      }
      if (i === el) {
        stopCountList[i]++;
      }
    }
  });

  for (let i = 1; i <= N; i++) {
    answer[i - 1] = [stopCountList[i] / passCountList[i], i];
  }
  answer.sort(function (a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] > b[0] ? -1 : 1;
  });
  for (let i = 0; i < N; i++) {
    answer[i] = answer[i][1];
  }

  return answer;
}
