// 프로그래머스 문자열 정렬하기 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .split("")
    .map((el) => +el)
    .filter((el) => Number.isInteger(el))
    .sort();
}
