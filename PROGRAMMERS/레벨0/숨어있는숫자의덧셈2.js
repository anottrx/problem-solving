// 프로그래머스 숨어있는 숫자의 덧셈 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  let answer = 0,
    numStr = "";
  my_string.split("").forEach((v) => {
    if (v == +v) numStr += v;
    else if (numStr !== "") {
      answer += +numStr;
      numStr = "";
    }
  });
  return numStr === "" ? answer : answer + +numStr;
}
