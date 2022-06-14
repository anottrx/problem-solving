// 프로그래머스 스킬트리 https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = 0;
  const set = new Set();
  for (let i = 0; i < skill.length; i++) {
    set.add(skill.charAt(i));
  }
  skill_trees.forEach((el) => {
    const stack = [];
    let nth = 0;
    let canLearn = true;
    for (let i = 0; i < el.length; i++) {
      if (canLearn && set.has(el.charAt(i))) {
        if (nth === 0 && el.charAt(i) === skill.charAt(0)) {
          stack.push(el.charAt(i));
          nth++;
        } else if (
          stack.length > 0 &&
          nth < skill.length &&
          el.charAt(i) === skill.charAt(nth) &&
          stack[stack.length - 1] === skill.charAt(nth - 1)
        ) {
          stack.pop();
          stack.push(el.charAt(i));
          nth++;
        } else {
          canLearn = false;
        }
      }
    }
    if (canLearn) {
      answer++;
    }
  });
  return answer;
}
