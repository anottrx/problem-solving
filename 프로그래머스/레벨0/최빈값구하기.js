// 프로그래머스 최빈값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const numMap = new Map();
  array.forEach((num) => {
    if (numMap.has(num)) numMap.set(num, numMap.get(num) + 1);
    else numMap.set(num, 1);
  });
  let answer = 0,
    max = 0,
    second = -1;
  numMap.forEach((value, key) => {
    if (value > max) {
      second = max;
      max = value;
      answer = key;
    } else if (value === max) {
      second = max;
    }
  });
  return second === max ? -1 : answer;
}
