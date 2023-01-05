// 프로그래머스 프린터 https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const cPriorities = [];
  priorities.forEach((priority, index) => {
    cPriorities.push({ priority, index });
  });
  let answer = 0;
  while (cPriorities.length > 0) {
    const first = cPriorities.shift();
    let flag = true;
    for (let i = 0; i < cPriorities.length; i++) {
      if (cPriorities[i].priority > first.priority) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      cPriorities.push(first);
    } else {
      answer++;
      if (first.index === location) break;
    }
  }
  return answer;
}
