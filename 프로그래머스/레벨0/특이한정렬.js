// 프로그래머스 특이한 정렬 https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    if (Math.abs(a - n) === Math.abs(b - n)) return b - a;
    return Math.abs(a - n) - Math.abs(b - n);
  });
}
