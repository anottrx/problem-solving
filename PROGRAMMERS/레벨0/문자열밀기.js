// 프로그래머스 문자열 밀기 https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  let count = 0;
  while (count++ < A.length) {
    if (A === B) break;
    A = A.slice(-1) + A.slice(0, A.length - 1);
  }
  return count <= A.length ? count - 1 : -1;
}
