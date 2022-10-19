// 프로그래머스 분수의 덧셈 https://school.programmers.co.kr/learn/courses/30/lessons/120808

const getNumber = (num1, num2) => {
  let under = 1;
  for (let i = Math.min(num1, num2); i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      under = i;
      break;
    }
  }
  return under;
};

function solution(denum1, num1, denum2, num2) {
  let under = getNumber(num1, num2);
  let up =
    denum1 * Math.floor(num2 / under) + denum2 * Math.floor(num1 / under);
  under = Math.floor((num1 * num2) / getNumber(num1, num2));

  let div = getNumber(up, under);
  return [Math.floor(up / div), Math.floor(under / div)];
}
