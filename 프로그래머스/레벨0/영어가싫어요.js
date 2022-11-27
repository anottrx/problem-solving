// 프로그래머스 영어가 싫어요 https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  return +numbers
    .replaceAll(/one/g, "1")
    .replaceAll(/two/g, "2")
    .replaceAll(/three/g, "3")
    .replaceAll(/four/g, "4")
    .replaceAll(/five/g, "5")
    .replaceAll(/six/g, "6")
    .replaceAll(/seven/g, "7")
    .replaceAll(/eight/g, "8")
    .replaceAll(/nine/g, "9")
    .replaceAll(/zero/g, "0");
}
