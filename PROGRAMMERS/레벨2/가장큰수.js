// 프로그래머스 가장 큰 수 https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  let answer = "";

  // 정렬
  numbers.sort(function (a, b) {
    return Number(String(a) + String(b)) > Number(String(b) + String(a))
      ? -1
      : 1;
  });

  // 시작이 0일 경우 0의 개수를 세서 numbers에서 뺀다
  let cntZero = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      cntZero++;
    } else {
      break;
    }
  }
  if (cntZero === numbers.length) {
    // 그런데 모든 수가 0일 경우 답이 0이기 때문에 제거할 0의 개수에서 1개를 뺀다
    cntZero--;
  }
  numbers.splice(0, cntZero);

  // 문자열로 바꾼다
  answer = numbers.join("");

  return answer;
}
