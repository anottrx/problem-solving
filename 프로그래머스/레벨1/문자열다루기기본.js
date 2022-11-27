// 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  let answer = false;

  if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
    answer = true;
    if (s.includes("e")) {
      answer = false;
    }
  }

  return answer;
}
