// 프로그래머스 A로 B 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  after.split("").forEach((v) => {
    for (let i = 0; i < before.length; i++) {
      if (before.charAt(i) === v) {
        before = before.slice(0, i) + before.slice(i + 1, before.length);
        break;
      }
    }
  });
  return before.length === 0 ? 1 : 0;
}
