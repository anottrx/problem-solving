// 프로그래머스 점의 위치 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  if (dot[0] < 0 && dot[1] < 0) return 3;
  else if (dot[0] < 0 && dot[1] > 0) return 2;
  else if (dot[0] > 0 && dot[1] > 0) return 1;
  else return 4;
}
