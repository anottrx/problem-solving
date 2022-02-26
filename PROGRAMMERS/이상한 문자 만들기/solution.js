// 프로그래머스 이상한 문자 만들기 https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = "";
  let idx = 0;
  s.split("").forEach((x) => {
    idx = x === " " ? 0 : idx + 1;
    answer = idx % 2 == 1 ? answer + x.toUpperCase() : answer + x.toLowerCase();
  });
  return answer;
}
