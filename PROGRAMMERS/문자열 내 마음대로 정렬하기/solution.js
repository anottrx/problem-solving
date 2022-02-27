// 프로그래머스 문자열 내 마음대로 정렬하기 https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  let answer = [];
  strings.sort(); // 우선 정렬
  strings.sort(function (a, b) {
    if (a.charCodeAt(n) >= b.charCodeAt(n)) {
      return 1;
    } else {
      return -1;
    }
  });

  answer = strings;
  return answer;
}
