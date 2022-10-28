// 프로그래머스 직사각형 넓이 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  dots.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return Math.abs(dots[0][0] - dots[2][0]) * Math.abs(dots[0][1] - dots[1][1]);
}
