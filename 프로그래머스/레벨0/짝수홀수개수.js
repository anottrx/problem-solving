// 프로그래머스 짝수 홀수 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
