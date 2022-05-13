// 프로그래머스 기능개발 https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];

  const stack = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]); // 필요한 날짜 계산
    if (stack.length > 0 && stack[0] >= day) {
    } else {
      // 만약 스택에서 가장 오래된 일보다 처리가 오래 걸린다면 스택의 일 개수를 answer에 넣고 스택 비우기
      answer.push(stack.length);
      stack.length = 0;
    }
    stack.push(day);
  }

  answer.push(stack.length); // 다 끝나고 스택에 남은 일 개수 answer에 넣기
  answer.splice(0, 1); // 처음에 들어간 0 제거하기

  return answer;
}
