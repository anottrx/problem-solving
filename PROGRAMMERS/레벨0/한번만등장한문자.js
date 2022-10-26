// 프로그래머스 한 번만 등장한 문자 https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const map = new Map();
  s.split("").forEach((el) => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  });
  return s
    .split("")
    .map((el) => {
      if (map.get(el) === 1) return el;
      else return "";
    })
    .sort()
    .join("");
}
