// 프로그래머스 배열 회전시키기 https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.splice(0, 0, numbers[numbers.length - 1]);
    numbers.splice(numbers.length - 1, 1);
  } else {
    numbers.splice(numbers.length, 0, numbers[0]);
    numbers.splice(0, 1);
  }
  return numbers;
}
