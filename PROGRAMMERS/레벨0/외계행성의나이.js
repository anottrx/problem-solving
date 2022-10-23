// 프로그래머스 외계행성의 나이 https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  return age
    .toString()
    .split("")
    .map((el) => String.fromCharCode(97 + Number(el)))
    .join("");
}
