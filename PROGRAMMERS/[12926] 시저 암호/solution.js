// 프로그래머스 시저 암호 https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = "";
  let str = s.split("");

  str = str.map((x) => {
    if (x === " ") {
      answer += " ";
    } else {
      const xNum = x.charCodeAt(0);
      let num = xNum + n;
      if (xNum <= 90) {
        if (num <= 90) answer += String.fromCharCode(num);
        else {
          num = num - 90 + 64;
          answer += String.fromCharCode(num);
        }
      } else {
        if (num <= 122) answer += String.fromCharCode(num);
        else {
          num = num - 122 + 96;
          answer += String.fromCharCode(num);
        }
      }
    }
  });
  return answer;
}
