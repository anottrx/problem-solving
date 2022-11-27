// 프로그래머스 다음 큰 숫자 https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let answer = n;
  while (true) {
    answer++;
    if (count(n.toString(2)) === count(answer.toString(2))) {
      break;
    }
  }
  return answer;
}

function count(n) {
  let oneList = n.match(/1/g);
  if (oneList === null) {
    return 0;
  }
  return oneList.length;
}
