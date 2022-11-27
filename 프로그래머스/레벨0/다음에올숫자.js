// 프로그래머스 다음에 올 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  return common[2] - common[1] === common[1] - common[0]
    ? common[common.length - 1] + common[2] - common[1]
    : common[common.length - 1] * (common[2] / common[1]);
}
