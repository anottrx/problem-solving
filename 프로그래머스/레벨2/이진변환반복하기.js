// 프로그래머스 이진 변환 반복하기 https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const answer = [0, 0];
  while (true) {
    answer[0] += 1;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replaceAll(/0/g, "").length.toString(2);
    if (s === "1") break;
  }
  return answer;
}
