// 프로그래머스 나누어 떨어지는 숫자 배열 https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((num) => num % divisor === 0);
  answer.sort(function (a, b) {
    return a - b;
  });
  answer = answer.length === 0 ? [-1] : answer;
  return answer;
}
