// 프로그래머스 구명보트 https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;
  while (true) {
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--;
    answer++;
    if (start > end) {
      break;
    } else if (start === end) {
      answer++;
      break;
    }
  }
  return answer;
}
