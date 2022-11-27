// 프로그래머스 연속 부분 수열 합의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const set = new Set();
  elements = elements.concat(elements);
  for (let i = 1; i < elements.length / 2; i++) {
    for (let j = 0; j <= elements.length; j++) {
      set.add(elements.slice(j, j + i).reduce((prev, cur) => prev + cur, 0));
    }
  }
  return set.size;
}
