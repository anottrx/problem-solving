// 프로그래머스 k진수에서 소수 개수 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/92335

const checkPrime = (num) => {
  for (let i = 2; i < Math.sqrt(Number(num) + 1); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  const splited = n.toString(k).split("0");
  return splited.filter((num) => num > 1 && checkPrime(num)).length;
}
