// 프로그래머스 연속된 수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  return total % num === 0
    ? Array.from(
        { length: num },
        (_, index) => total / num - Math.floor(num / 2) + index
      )
    : Array.from(
        { length: num },
        (_, index) => Math.ceil(total / num) - Math.floor(num / 2) + index
      );
}
