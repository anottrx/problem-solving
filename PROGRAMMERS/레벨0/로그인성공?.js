// 프로그래머스 로그인 성공? https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  return db.filter((el) => el[0] === id_pw[0]).length === 0
    ? "fail"
    : db.filter((el) => el[0] === id_pw[0] && el[1] === id_pw[1]).length === 0
    ? "wrong pw"
    : "login";
}
