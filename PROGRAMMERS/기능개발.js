// 프로그래머스 기능개발 https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];

  const stack = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (stack.length > 0 && stack[0] >= day) {
      stack.push(day);
    } else {
      answer.push(stack.length);
      stack.length = 0;
      stack.push(day);
    }
  }

  answer.push(stack.length);
  answer.splice(0, 1);

  return answer;
}
