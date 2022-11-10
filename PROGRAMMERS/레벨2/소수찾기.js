// 프로그래머스 소수 찾기 https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let answer = 0;

  const cntArr = new Array(n + 1); // boolean 배열로 true면 소수 아니고, false면 소수
  let num = 2;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(n); j++) {
      // 에라토스테네스의 체
      if (num * j <= n && !cntArr[num * j]) {
        // 배열 초과 막기 위함
        cntArr[num * j] = true;
      } else if (num * j > n) {
        // 시간 초과 막기 위함
        break;
      }
    }
    num++;
  }
  for (let i = 2; i <= n; i++) {
    if (!cntArr[i]) {
      // false면 홀수
      answer++;
    }
  }
  return answer;
}
