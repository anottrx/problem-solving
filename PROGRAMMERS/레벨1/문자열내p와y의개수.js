// 프로그래머스 문자열 내 p와 y의 개수 https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let answer = true;

  if (
    (s.toLowerCase().match(/p/g) || []).length !==
    (s.toLowerCase().match(/y/g) || []).length
  )
    answer = false;

  return answer;
}
