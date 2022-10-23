// 프로그래머스 구슬을 나누는 경우의 수 https://school.programmers.co.kr/learn/courses/30/lessons/120840

const factorial = (num, end) => {
  let res = 1;
  while (num > end) {
    res *= num;
    num--;
  }
  return res;
};

function solution(balls, share) {
  return Math.floor(factorial(balls, balls - share) / factorial(share, 1));
}
