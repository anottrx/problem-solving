// 프로그래머스 귤 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const map = new Map();
  tangerine.forEach((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });
  const nums = [];
  map.forEach((value) => {
    nums.push(value);
  });
  nums.sort((a, b) => a - b);
  let answer = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    k -= nums[i];
    answer++;
    if (k <= 0) break;
  }
  return answer;
}
