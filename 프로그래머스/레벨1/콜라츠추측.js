// 프로그래머스 콜라츠 추측 https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let answer = -1;

  for (let i = 0; i < 501; i++) {
    if (num === 1) {
      // 1일 때는 바로 끝내기
      answer = i;
      break;
    }
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }

  return answer;
}
