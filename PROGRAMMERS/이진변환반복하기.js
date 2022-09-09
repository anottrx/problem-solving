// 프로그래머스 이진 변환 반복하기 https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const answer = [0, 0];
  while (true) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "");
    if (s === "1") {
      break;
    }
    s = s.length.toString(2);
  }
  return answer;
}
