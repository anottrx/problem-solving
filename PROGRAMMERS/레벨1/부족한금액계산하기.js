// 프로그래머스 부족한 금액 계산하기 https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let temp = (1 + count) * Math.ceil(count / 2) * price;
  if (count % 2 === 1) temp = temp - Math.ceil(count / 2) * price;
  return temp - money > 0 ? temp - money : 0;
}
