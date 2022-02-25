// 프로그래머스 두 개 뽑아서 더하기 https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  // const answer = [];

  const temp = new Set();
  let idx = 0,
    idx2 = 0;
  numbers.map((x) => {
    idx2 = 0;
    numbers.map((y) => {
      if (idx !== idx2) {
        temp.add(x + y);
      }
      idx2++;
    });
    idx++;
  });

  const answer = [...temp];
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
