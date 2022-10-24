// 프로그래머스 주사위의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  return box.reduce((prev, cur) => prev * Math.floor(cur / n), 1);
}
