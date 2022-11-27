// 프로그래머스 진료순서 정하기 https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  return emergency
    .reduce((prev, num, index) => [...prev, { index: index + 1, num }], [])
    .sort((a, b) => b.num - a.num)
    .map((el, idx) => Object.assign(el, { sortedIndex: idx + 1 }))
    .sort((a, b) => a.index - b.index)
    .reduce((prev, cur) => [...prev, cur.sortedIndex], []);
}
