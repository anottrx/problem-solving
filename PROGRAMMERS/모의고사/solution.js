// 프로그래머스 모의고사 https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const answer = [];

  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let idx = 0;
  let cnt1 = 0;
  answers.forEach((x) => {
    if (x === first[idx]) {
      cnt1++;
    }
    idx = (idx + 1) % 5;
  });
  idx = 0;
  let cnt2 = 0;
  answers.forEach((x) => {
    if (x === second[idx]) {
      cnt2++;
    }
    idx = (idx + 1) % second.length;
  });
  idx = 0;
  let cnt3 = 0;
  answers.forEach((x) => {
    if (x === third[idx]) {
      cnt3++;
    }
    idx = (idx + 1) % third.length;
  });
  const max = Math.max(cnt1, cnt2, cnt3);
  if (cnt1 == max) answer.push(1);
  if (cnt2 == max) answer.push(2);
  if (cnt3 == max) answer.push(3);
  return answer;
}
