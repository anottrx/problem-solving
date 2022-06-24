// 프로그래머스 행렬의 곱셈 https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
