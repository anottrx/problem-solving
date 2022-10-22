// 프로그래머스 각도기 https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  return angle <= 90 ? Math.floor(angle / 90) + 1 : Math.floor(angle / 90) + 2;
}
