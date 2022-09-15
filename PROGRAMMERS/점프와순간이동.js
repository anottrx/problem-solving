// 프로그래머스 점프와 순간 이동 https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      n = n - 1;
      answer++;
    } else n = Math.floor(n / 2);
  }
  return answer;
}
