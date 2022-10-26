// 프로그래머스 가까운 수 https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let answer = 0,
    diff = 201;
  array.sort((a, b) => a - b);
  array.forEach((num) => {
    if (Math.abs(n - num) < diff) {
      diff = Math.abs(n - num);
      answer = num;
    }
  });
  return answer;
}
