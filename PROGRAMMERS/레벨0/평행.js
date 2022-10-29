// 프로그래머스 평행 https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  return (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]) ===
    (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])
    ? 1
    : 0;
}
