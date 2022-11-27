// 프로그래머스 하샤드 수 https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let answer = true;
  let sum = 0;
  sum = String(x)
    .split("")
    .reduce((prev, cur) => prev + Number(cur), sum);
  answer = x % sum === 0 ? true : false;
  return answer;
}
