// 프로그래머스 최댓값과 최솟값 https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const splited = s.split(" ");
  for (let i = 0; i < splited.length; i++) {
    splited[i] = Number(splited[i]);
  }
  return Math.min(...splited) + " " + Math.max(...splited);
}
