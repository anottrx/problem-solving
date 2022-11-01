// 프로그래머스 옹알이 (2) https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  return babbling.reduce(
    (prev, word) =>
      prev +
      (/ayaaya|yeye|woowoo|mama/.test(word)
        ? 0
        : word.replaceAll(/aya|ye|woo|ma/g, "") === ""
        ? 1
        : 0),
    0
  );
}
