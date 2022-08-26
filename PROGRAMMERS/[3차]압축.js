// 프로그래머스 [3차] 압축 https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  const answer = [];
  const alphaMap = new Map(); // key:알파벳, value:숫자
  for (let i = 1; i <= 26; i++) {
    alphaMap.set(String.fromCharCode(i + 64), i);
  }

  while (true) {
    let maxLen = 0;
    for (let i = 1; i <= msg.length; i++) {
      if (alphaMap.has(msg.substring(0, i))) maxLen++;
      else break;
    }
    answer.push(alphaMap.get(msg.substring(0, maxLen)));
    alphaMap.set(msg.substring(0, maxLen + 1), alphaMap.size + 1);
    msg = msg.substring(maxLen, msg.length);
    if (msg.length === 0) break;
  }

  return answer;
}
