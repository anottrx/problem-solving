// 프로그래머스 가장 가까운 같은 글자 https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const map = new Map();
  return s.split("").map((v, i) => {
    if (!map.has(v)) {
      map.set(v, [i]);
      return -1;
    } else {
      const indexs = map.get(v);
      let res = i - indexs[indexs.length - 1];
      indexs.push(i);
      map.set(v, indexs);
      return res;
    }
  });
}
