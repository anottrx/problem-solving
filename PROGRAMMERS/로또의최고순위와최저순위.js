// 프로그래머스 로또의 최고 순위와 최저 순위 https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const answer = [];
  const nth = [6, 6, 5, 4, 3, 2, 1];

  const lottoWinSet = new Set();
  win_nums.forEach((el) => {
    lottoWinSet.add(el);
  });

  let leastCount = 0;
  let winCount = 0;
  lottos.forEach((el) => {
    if (el === 0) {
      winCount++;
    } else if (lottoWinSet.has(el)) {
      leastCount++;
    }
  });

  answer.push(nth[leastCount + winCount]);
  answer.push(nth[leastCount]);
  return answer;
}
