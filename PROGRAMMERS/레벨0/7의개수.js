// 프로그래머스 7의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  return array
    .map((num) => num.toString().replaceAll(/[012345689]/g, ""))
    .reduce((prev, cur) => prev + cur.length, 0);
}
