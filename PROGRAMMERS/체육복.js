// 프로그래머스 체육복 https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = 0;

  // 정렬
  lost.sort();
  reserve.sort();

  // lost, reserve 각각 Set으로 저장
  const lostSet = new Set();
  let size = Number(lost.length);
  for (let i = 0; i < size; i++) {
    lostSet.add(Number(lost[i]));
  }
  const reserveSet = new Set();
  size = Number(reserve.length);
  for (let i = 0; i < size; i++) {
    reserveSet.add(Number(reserve[i]));
  }

  // lostSet과 reserveSet이 겹칠 경우 둘다 제거
  size = Number(lost.length);
  for (let i = 0; i < size; i++) {
    if (reserveSet.has(lost[i])) {
      reserveSet.delete(lost[i]);
      lostSet.delete(lost[i]);
    }
  }

  // lostSet을 다시 lost에 저장
  size = Number(lostSet.size);
  lost = [];
  for (let i of lostSet) {
    lost.push(i);
  }

  size = Number(lost.length);
  for (let i = 0; i < size; i++) {
    if (reserveSet.has(lost[i] - 1)) {
      reserveSet.delete(lost[i] - 1);
    } else if (reserveSet.has(lost[i] + 1)) {
      reserveSet.delete(lost[i] + 1);
    } else {
      answer++;
    }
  }

  answer = n - answer;
  return answer;
}
