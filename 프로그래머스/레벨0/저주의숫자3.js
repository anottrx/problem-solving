// 프로그래머스 저주의 숫자 3 https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) n++;
    else if (i.toString().includes("3")) n++;
  }
  return n;
}
