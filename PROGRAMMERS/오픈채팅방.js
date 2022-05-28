// 프로그래머스 오픈채팅방 https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const answer = [];

  const idMap = new Map();
  for (let i = 0; i < record.length; i++) {
    const splited = record[i].split(" ");
    if (splited.length === 3) {
      if (idMap.has(splited[1])) {
        idMap.delete(splited[1]);
        idMap.set(splited[1], splited[2]);
      } else {
        idMap.set(splited[1], splited[2]);
      }
    }
  }

  for (let i = 0; i < record.length; i++) {
    const splited = record[i].split(" ");
    if (splited[0] === "Enter" || splited[0] === "Leave") {
      answer.push(
        idMap.get(splited[1]) +
          "님이 " +
          (splited[0] === "Enter" ? "들어왔습니다." : "나갔습니다.")
      );
    }
  }

  return answer;
}
