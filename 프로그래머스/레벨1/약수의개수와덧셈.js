// 프로그래머스 약수의 개수와 덧셈 https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;

  for (let n = left; n <= right; n++) {
    answer = getCnt(n) % 2 == 0 ? answer + n : answer - n;
  }
  return answer;
}

function getCnt(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      cnt++;
    }
  }
  return cnt;
}
