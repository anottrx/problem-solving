// 프로그래머스 핸드폰 번호 가리기 https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  let answer = "";

  answer =
    "*".repeat(phone_number.length - 4) +
    phone_number.slice(phone_number.length - 4, phone_number.length);
  return answer;
}
