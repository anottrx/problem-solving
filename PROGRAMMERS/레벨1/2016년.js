// 프로그래머스 2016년 https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let answer = '';
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dates = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let date = b;
  for (let i = 0; i < a - 1; i++) {
    date += days[i];
  }
  date %= 7;
  answer = dates[date];
  return answer;
}
