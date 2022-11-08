// 프로그래머스 음양 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, cur, index) => prev + (signs[index] ? cur : cur * -1),
    0
  );
}
