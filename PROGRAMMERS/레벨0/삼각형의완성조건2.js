// 프로그래머스 삼각형의 완성조건 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  const answer = new Set();
  // sides 중 더 큰 변이 제일 큰 변이라면
  // 나머지 + sides 중 작은 변 > 제일 큰 변
  // 나머지 <= 제일 큰 변
  for (
    let i = Math.max(...sides) - Math.min(...sides) + 1;
    i <= Math.max(...sides);
    i++
  ) {
    answer.add(i);
  }
  // sides 말고 나머지 변이 제일 큰 변이라면
  // 나머지 변 > sides 중 큰 변
  // sides 두 변 합 > 나머지 변
  for (let i = Math.max(...sides) + 1; i < sides[0] + sides[1]; i++) {
    answer.add(i);
  }
  return answer.size;
}
