// 프로그래머스 OX퀴즈 https://school.programmers.co.kr/learn/courses/30/lessons/120907

const getNumber = (str) => {
  return str.charAt(0) === "-" ? Number(str.slice(1)) * -1 : Number(str);
};

function solution(quiz) {
  return quiz.map((el) => {
    const splited = el.split(" "); // 숫자, 부등호, 숫자, =, 숫자
    if (
      (splited[1] === "+" &&
        getNumber(splited[0]) + getNumber(splited[2]) ===
          getNumber(splited[4])) ||
      (splited[1] === "-" &&
        getNumber(splited[0]) - getNumber(splited[2]) === getNumber(splited[4]))
    )
      return "O";
    return "X";
  });
}
