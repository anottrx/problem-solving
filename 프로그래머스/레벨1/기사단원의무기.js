// 프로그래머스 기사단원의 무기 https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let array = Array.from(Array(number).keys());
  array = array.map((num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num + 1, 2); i++) {
      if ((num + 1) % i === 0) {
        count += 1;
        if ((num + 1) / i !== i) count += 1;
      }
    }
    return count;
  });
  return array.reduce((prev, cur) => prev + (cur > limit ? power : cur), 0);
}
