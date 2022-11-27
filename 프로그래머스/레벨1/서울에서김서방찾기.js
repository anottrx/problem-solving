// 프로그래머스 서울에서 김서방 찾기 https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  var answer = "";
  let idx = 0;
  seoul.forEach((name) => {
    if (name === "Kim") {
      answer = "김서방은 " + idx + "에 있다";
    }
    idx++;
  });
  return answer;
}
