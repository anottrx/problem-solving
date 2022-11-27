// 프로그래머스 할인 행사 https://school.programmers.co.kr/learn/courses/30/lessons/131127

const canBuyAll = (map1, map2) => {
  let result = true;
  map1.forEach((value, key) => {
    if (map2.get(key) !== value) result = false;
  });
  return result;
};

function solution(want, number, discount) {
  const map = new Map();
  want.forEach((food, index) => {
    map.set(food, number[index]);
  });
  const totalCount = number.reduce((prev, cur) => prev + cur, 0);
  const checkMap = new Map();
  want.forEach((food) => {
    checkMap.set(food, 0);
  });
  for (let i = 0; i < 10; i++) {
    const curFood = discount[i];
    if (checkMap.has(curFood)) checkMap.set(curFood, checkMap.get(curFood) + 1);
  }
  let answer = 0;
  if (canBuyAll(checkMap, map)) answer += 1;
  for (let i = 10; i < discount.length; i++) {
    const curFood = discount[i];
    if (checkMap.has(curFood)) checkMap.set(curFood, checkMap.get(curFood) + 1);
    const lastFood = discount[i - 10];
    if (checkMap.has(lastFood))
      checkMap.set(lastFood, checkMap.get(lastFood) - 1);
    if (canBuyAll(checkMap, map)) answer += 1;
  }
  return answer;
}
