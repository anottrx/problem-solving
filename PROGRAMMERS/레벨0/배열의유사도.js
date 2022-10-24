// 프로그래머스 배열의 유사도 https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  let answer = 0;
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  set1.forEach((el) => {
    if (set2.has(el)) {
      set2.delete(el);
      answer++;
    }
  });
  return answer;
}
