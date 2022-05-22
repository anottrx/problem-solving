// 프로그래머스 JadenCase 문자열 만들기 https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  s = s.toLowerCase();
  const splited = s.split(" ");
  for (let i = 0; i < splited.length; i++) {
    splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
  }
  let answer = splited.join(" ");
  return answer;
}
