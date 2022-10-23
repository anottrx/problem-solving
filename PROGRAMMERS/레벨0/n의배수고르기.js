// 프로그래머스 n의 배수 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
