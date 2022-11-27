// 프로그래머스 올바른 괄호 https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let answer = true;
  const stack = [];
  s.split("").forEach((el) => {
    if (el === "(") {
      stack.push("(");
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1] === "(" &&
      el === ")"
    ) {
      stack.pop();
    } else {
      answer = false;
      return false;
    }
  });
  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
