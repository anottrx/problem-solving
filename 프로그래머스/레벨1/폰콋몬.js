// 프로그래머스 폰켓몬 https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let answer = 0;

  const num = nums.length / 2;
  nums = [...new Set(nums)];
  answer = nums.length >= num ? num : nums.length;
  return answer;
}
