// 프로그래머스 팩토리얼 https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let answer = 1,
    num = 1;
  while (true) {
    num *= answer;
    if (num > n) break;
    answer++;
  }
  return --answer;
}
