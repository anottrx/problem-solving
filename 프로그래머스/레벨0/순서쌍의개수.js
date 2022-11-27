// 프로그래머스 순서쌍의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  return (
    new Array(Math.floor(Math.sqrt(n, 2)))
      .fill(0)
      .filter((_, index) => n % (index + 1) === 0).length *
      2 -
    (Number.isInteger(Math.sqrt(n, 2)) ? 1 : 0)
  );
}
