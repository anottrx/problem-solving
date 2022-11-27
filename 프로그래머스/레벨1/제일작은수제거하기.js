// 프로그래머스 제일 작은 수 제거하기 https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let answer = [];

  let min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  answer = arr.length > 0 ? arr : [-1];
  return answer;
}
