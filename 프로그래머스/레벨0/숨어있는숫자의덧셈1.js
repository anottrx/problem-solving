// 프로그래머스 숨어있는 숫자의 덧셈 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  return (
    my_string
      .split("")
      .filter((el) => Number.isInteger(Number(el)))
      // .reduce((prev, cur) => prev + Number(cur), 0);
      .map((el) => +el)
      .reduce((prev, cur) => prev + cur, 0)
  );
}
