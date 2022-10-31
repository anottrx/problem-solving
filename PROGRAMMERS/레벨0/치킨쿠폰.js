// 프로그래머스 치킨 쿠폰 https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let answer = 0;
  while (true) {
    if (chicken < 10) break;
    answer += Math.floor(chicken / 10);
    chicken =
      chicken - Math.floor(chicken / 10) * 10 + Math.floor(chicken / 10);
  }
  return answer;
}
