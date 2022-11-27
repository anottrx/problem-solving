// 프로그래머스 개미 군단 https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  let answer = 0;
  while (hp > 0) {
    if (hp >= 5) hp -= 5;
    else if (hp >= 3) hp -= 3;
    else hp--;
    answer++;
  }
  return answer;
}
