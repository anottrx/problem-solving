// 프로그래머스 옹알이(1) https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  return babbling
    .map((word) => {
      return word.replaceAll(/aya|ye|woo|ma/g, "_").replaceAll(/_/g, "");
    })
    .filter((word) => word.length === 0).length;
}
