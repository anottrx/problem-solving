// 프로그래머스 정수 제곱근 판별 https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let answer = -1;
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    // 1부터 시작하기
    if (n == i * i) {
      answer = (i + 1) * (i + 1);
      break; // 제곱이 될 수 있는 경우는 1개만 있기 떄문에 찾으면 끝내기
    }
  }
  return answer;
}
