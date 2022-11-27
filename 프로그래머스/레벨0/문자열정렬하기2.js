// 프로그래머스 문자열 정렬하기 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}
