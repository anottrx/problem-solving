// 프로그래머스 k의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let list = "";
  for (let n = i; n <= j; n++) {
    list += n;
  }
  return list.split(k).length - 1;
}
