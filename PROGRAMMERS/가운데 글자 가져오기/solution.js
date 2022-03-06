// 프로그래머스 가운데 글자 가져오기 https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let answer =
    s.length % 2 === 1
      ? s.slice(s.length / 2, s.length / 2 + 1)
      : s.slice(s.length / 2 - 1, s.length / 2 + 1);
  return answer;
}
