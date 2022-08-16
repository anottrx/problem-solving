// 프로그래머스 같은 숫자는 싫어 https://programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  const answer = arr.filter((el, index) => index > 0 && arr[index - 1] !== el);
  answer.splice(0, 0, arr[0]);
  return answer;
}

function befSolution(arr) {
  const answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
