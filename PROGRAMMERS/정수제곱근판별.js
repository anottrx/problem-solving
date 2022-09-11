// 프로그래머스 정수 제곱근 판별 https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let answer = -1;
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    if (n == i * i) {
      answer = Math.pow(i + 1, 2);
      break;
    }
  }
  return answer;
}
