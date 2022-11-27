// 프로그래머스 369게임 https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return order.toString().replaceAll(/[1245780]/g, "").length;
}
