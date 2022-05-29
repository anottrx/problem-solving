// 프로그래머스 소수 만들기 https://programmers.co.kr/learn/courses/30/lessons/12977
// 조합 참고 : https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

function solution(nums) {
  let answer = 0;

  const res = combination(nums, 3);
  const sumArr = [];
  let max = 0;
  for (let i = 0; i < res.length; i++) {
    const sum = res[i].reduce((partialSum, a) => partialSum + a, 0);
    sumArr.push(sum);
    max = Math.max(max, sum);
  }

  const prime = new Array(max + 1).fill(true);
  for (let i = 2; i <= max; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= max; j = j + i) {
        prime[j] = false;
      }
    }
  }

  for (let i = 0; i < sumArr.length; i++) {
    if (prime[sumArr[i]]) {
      answer++;
    }
  }
  return answer;
}

const combination = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};
