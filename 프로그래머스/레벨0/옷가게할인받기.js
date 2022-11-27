// 프로그래머스 옷가게 할인 받기 https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  return price >= 500000
    ? Math.floor(price * 0.8)
    : price >= 300000
    ? Math.floor(price * 0.9)
    : price >= 100000
    ? Math.floor(price * 0.95)
    : price;
}
