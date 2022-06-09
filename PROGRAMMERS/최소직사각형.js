// 프로그래머스 최소직사각형 https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let a = 0,
    b = 0;
  for (let i = 0; i < sizes.length; i++) {
    let max = Math.max(sizes[i][0], sizes[i][1]);
    let min = Math.min(sizes[i][0], sizes[i][1]);
    a = Math.max(a, max);
    b = Math.max(b, min);
  }
  return a * b;
}
