// 프로그래머스 아이스 아메리카노 https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
