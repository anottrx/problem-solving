// 프로그래머스 문자열 내림차순으로 배치하기 https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  let answer = "";

  const charList = s.split("");
  charList.sort().reverse();
  answer = charList.join("");

  return answer;
}
