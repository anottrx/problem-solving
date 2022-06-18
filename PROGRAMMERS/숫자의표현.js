// 프로그래머스 숫자의 표현 https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let temp = 0;
    for (let j = i; j <= n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
        break;
      } else if (temp > n) {
        break;
      }
    }
  }
  return answer;
}
