// 프로그래머스 중복된 문자 제거 https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  const set = new Set();
  return my_string
    .split("")
    .map((el) => {
      if (!set.has(el)) {
        set.add(el);
        return el;
      }
    })
    .join("");
}
