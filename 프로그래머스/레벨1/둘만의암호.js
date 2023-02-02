// 프로그래머스 둘만의 암호 https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const skipSet = new Set(skip.split("").map((el) => el.charCodeAt(0)));
  return s
    .split("")
    .map((el) => {
      let next = el.charCodeAt(0);
      for (let i = 0; i < index; i++) {
        next++;
        if (next > 122) next = 97;
        while (skipSet.has(next)) {
          next++;
          if (next > 122) next = 97;
        }
      }
      return String.fromCharCode(next);
    })
    .join("");
}
