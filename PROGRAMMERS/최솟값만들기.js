// 프로그래머스 최솟값 만들기 https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    answer = answer + A[i] * B[A.length - i - 1];
  }
  return answer;
}
