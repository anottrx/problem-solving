// 프로그래머스 가위 바위 보 https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const winMap = new Map();
  winMap.set("2", "0").set("0", "5").set("5", "2");
  return rsp
    .split("")
    .map((el) => winMap.get(el))
    .join("");
}
