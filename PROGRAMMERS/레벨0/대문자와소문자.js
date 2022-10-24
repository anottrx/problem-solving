// 프로그래머스 대문자와 소문자 https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return my_string
    .split("")
    .reduce(
      (prev, cur) =>
        prev +
        (cur === cur.toUpperCase() ? cur.toLowerCase() : cur.toUpperCase()),
      ""
    );
}
