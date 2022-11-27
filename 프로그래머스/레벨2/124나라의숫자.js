// 프로그래머스 124 나라의 숫자 https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = "";
  while (true) {
    if (n % 3 === 0) {
      answer = "4" + answer;
      n = Math.floor(n / 3);
      n--;
    } else {
      answer = (n % 3) + answer;
      n = Math.floor(n / 3);
    }
    if (n <= 0) {
      break;
    }
  }
  return answer;
}
