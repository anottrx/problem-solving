// 프로그래머스 인덱스 바꾸기 https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  return my_string
    .split("")
    .map((el, index) => {
      if (index === num1) return my_string.charAt(num2);
      else if (index === num2) return my_string.charAt(num1);
      else return el;
    })
    .join("");
}
