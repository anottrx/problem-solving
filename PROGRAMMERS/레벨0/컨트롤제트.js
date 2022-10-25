// 프로그래머스 컨트롤 제트 https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  const list = s.split(" ").map((e) => +e);
  const stack = [];
  list.forEach((num) => {
    if (!Number.isNaN(num)) stack.push(num);
    else stack.pop();
  });
  return stack.reduce((prev, cur) => prev + cur, 0);
}
