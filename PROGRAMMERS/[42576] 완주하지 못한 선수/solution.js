// 프로그래머스 완주하지 못한 선수 https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
