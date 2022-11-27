// 프로그래머스 문자열 계산하기 https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const splited = my_string.split(" ");
  let answer = +splited[0];
  for (let i = 1; i < splited.length; i = i + 2) {
    if (splited[i] === "+") answer += +splited[i + 1];
    else answer -= +splited[i + 1];
  }
  return answer;
}
