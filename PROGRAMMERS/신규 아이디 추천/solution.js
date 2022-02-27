// 프로그래머스 신규 아이디 추천 https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = "";

  // 1단계 : 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  let idArr = new_id
    .split("")
    .filter(
      (x) =>
        x.charAt(0) === "." ||
        x.charAt(0) === "-" ||
        x.charAt(0) === "_" ||
        Number.isInteger(Number(x.charAt(0))) ||
        x.charAt(0).match(/[a-z]/i)
    );

  // 3단계 : 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  let cnt = 0;
  idArr.forEach((x) => {
    if (x.charAt(0) === ".") {
      if (cnt === 0) {
        answer = answer + x;
        cnt = 1;
      } else {
        cnt++;
      }
    } else {
      cnt = 0;
      answer = answer + x;
    }
  });

  // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
  answer = answer.charAt(0) === "." ? answer.slice(1, answer.length) : answer;
  answer =
    answer.charAt(answer.length - 1) === "."
      ? answer.slice(0, answer.length - 1)
      : answer;
  // 5단계 : 빈 문자열이라면, new_id에 "a"를 대입
  answer = answer.length === 0 ? "a" : answer;

  // 6단계 : new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
  // 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  answer =
    answer.charAt(answer.length - 1) === "."
      ? answer.slice(0, answer.length - 1)
      : answer;

  // 7단계 : new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
  answer = answer.length == 1 ? answer + answer.charAt(0).repeat(2) : answer;
  answer = answer.length == 2 ? answer + answer.charAt(1).repeat(1) : answer;

  return answer;
}
