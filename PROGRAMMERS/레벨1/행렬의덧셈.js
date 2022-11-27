// 프로그래머스 행렬의 덧셈 https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const answer = [[]];
  answer.splice(0, answer.length);
  for (let i = 0; i < arr1.length; i++) {
    const tempArr = [];
    let idx = 0;
    arr1[i].forEach((x) => {
      tempArr.push(x + arr2[i][idx]);
      idx++;
    });
    answer.push(tempArr);
  }
  return answer;
}
