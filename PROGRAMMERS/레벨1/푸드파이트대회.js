// 프로그래머스 푸드 파이트 대회 https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let answer = "";
  food.forEach((num, index) => {
    answer += index.toString().repeat(Math.floor(num / 2));
  });
  return answer + "0" + answer.split("").reverse().join("");
}
