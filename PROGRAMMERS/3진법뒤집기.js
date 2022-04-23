// 프로그래머스 3진법 뒤집기 https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  let answer = 0;

  let tempStr = "";
  while (n > 0) {
    tempStr = String(n % 3) + tempStr;
    n = Math.floor(n / 3);
  }
  tempStr = tempStr.split("").reverse().join("");

  let nth = tempStr.length - 1;
  tempStr.split("").forEach((x) => {
    answer = answer + x * Math.pow(3, nth--);
  });

  return answer;
}
