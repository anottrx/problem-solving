// 프로그래머스 최댓값 만들기 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  if (numbers.length === 2) return numbers[0] * numbers[1];
  numbers.sort((a, b) => a - b);
  const positive = numbers.filter((num) => num >= 0);
  let posMax =
    positive.length >= 2
      ? positive[positive.length - 1] * positive[positive.length - 2]
      : positive[0];
  const negative = numbers.filter((num) => num < 0);
  let negMax =
    negative.length >= 2
      ? negative[negative.length - 1] * negative[negative.length - 2]
      : negative[0];
  if (posMax === undefined) return negMax;
  if (negMax === undefined) return posMax;
  return posMax > negMax ? posMax : negMax;
}
