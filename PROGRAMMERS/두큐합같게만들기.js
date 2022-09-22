// 프로그래머스 두 큐 합 같게 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
  var answer = 0;
  let totalLength = queue1.length * 3;
  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
  if ((sum1 + sum2) % 2 === 1) return -1;

  const q1 = queue1.concat(queue2),
    q2 = queue2.concat(queue1);
  let pointer1 = 0,
    pointer2 = 0;
  while (sum1 !== sum2) {
    if (sum1 < sum2) {
      const num = q2[pointer2];
      sum2 -= num;
      sum1 += num;
      pointer2++;
    } else {
      const num = q1[pointer1];
      sum1 -= num;
      sum2 += num;
      pointer1++;
    }
    answer++;
    if (answer > totalLength) {
      answer = -1;
      break;
    }
  }
  return answer;
}
