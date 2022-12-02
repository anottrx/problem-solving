// 프로그래머스 문자열 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let index = 0;
  while (index < s.length) {
    let start = s.charAt(index),
      same = 1,
      diff = 0;
    index++;
    for (let i = index; i < s.length; i++) {
      index++;
      if (s.charAt(i) === start) same++;
      else diff++;
      if (same === diff) break;
    }
    answer++;
  }
  return answer;
}
