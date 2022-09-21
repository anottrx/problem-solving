// 프로그래머스 보석 쇼핑 https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const set = new Set();
  gems.forEach((gem) => {
    if (!set.has(gem)) set.add(gem);
  });
  const gemTotalCount = set.size;

  const map = new Map();
  map.set(gems[0], 1);
  let answer = [1, gems.length];
  let start = 0,
    end = 0;
  while (start <= end && end < gems.length) {
    if (map.size < gemTotalCount) {
      end++;
      if (!map.has(gems[end])) map.set(gems[end], 1);
      else map.set(gems[end], map.get(gems[end]) + 1);
    } else {
      if (answer[1] - answer[0] > end - start) answer = [start + 1, end + 1];
      if (map.get(gems[start]) > 1)
        map.set(gems[start], map.get(gems[start]) - 1);
      else map.delete(gems[start]);
      start++;
    }
  }
  return answer;
}
