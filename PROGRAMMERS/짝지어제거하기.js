// 프로그래머스 짝지어 제거하기 https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];
  stack.push(s.charAt(0));

  let index = 1;
  while (true) {
    if (index === s.length) {
      break;
    }

    if (stack[stack.length - 1] === s.charAt(index)) {
      stack.pop();
    } else {
      stack.push(s.charAt(index));
    }
    index++;
  }

  let answer = stack.length === 0 ? 1 : 0;
  return answer;
}
