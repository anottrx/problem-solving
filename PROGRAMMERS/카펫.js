// 프로그래머스 카펫 https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let answer = [];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i == 0 && brown === (yellow / i + i) * 2 + 4) {
      answer = [i + 2, yellow / i + 2];
    }
  }
  return answer;
}
