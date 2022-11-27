// 프로그래머스 모음 제거 https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  return my_string.replaceAll(/[aeiou]/g, "");
}
