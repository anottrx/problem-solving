// 프로그래머스 2차원으로 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  const answer = [];
  for (let i = 0; i < num_list.length; i = i + n) {
    answer.push(num_list.filter((el, index) => index >= i && index < i + n));
  }
  return answer;
}
