// 프로그래머스 위장 https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothMap = new Map();
  clothes.forEach((cloth) => {
    let cur = [];
    if (clothMap.has(cloth[1])) {
      cur = clothMap.get(cloth[1]);
    }
    cur.push(cloth[0]);
    clothMap.set(cloth[1], cur);
  });

  let answer = 1;
  for (const [key, value] of clothMap) {
    answer *= value.length + 1;
  }
  return answer - 1;
}
