// 프로그래머스 평균 구하기 https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let answer = 0;
  let init = 0;
  const sum = arr.reduce((prev, cur) => prev + cur, init);
  answer = sum / arr.length;
  return answer;
}
