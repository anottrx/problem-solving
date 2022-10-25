// 프로그래머스 소인수분해 https://school.programmers.co.kr/learn/courses/30/lessons/120852

const getPrimeNumbers = (num) => {
  const result = [];
  for (let j = 2; j <= num; j++) {
    let isPrime = true;
    for (let i = 2; i < j; i++) {
      if (j % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result.push(j);
  }
  return result;
};

function solution(n) {
  const answer = [];
  const nums = getPrimeNumbers(n);
  let i = 0;
  while (true) {
    if (n === 1) break;
    if (n % nums[i] === 0) {
      n /= nums[i];
      answer.push(nums[i]);
    } else i++;
  }
  return [...new Set(answer)];
}
