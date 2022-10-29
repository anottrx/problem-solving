// 프로그래머스 겹치는 선분의 길이 https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const lineArr = new Array(201).fill(0);
  lines.forEach((line) => {
    for (let i = line[0] + 101; i <= line[1] + 100; i++) {
      lineArr[i]++;
    }
  });
  return lineArr.filter((line) => line > 1).length;
}
