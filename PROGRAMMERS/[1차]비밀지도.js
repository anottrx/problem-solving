// 프로그래머스 [1차] 비밀지도 https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const answer = [];

  const arrList1 = makeBinary(n, arr1);
  const arrList2 = makeBinary(n, arr2);

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arrList1[i].charAt(j) === "1" || arrList2[i].charAt(j) === "1") {
        temp = temp + "#";
      } else {
        temp = temp + " ";
      }
    }
    answer.push(temp);
  }

  return answer;
}

function makeBinary(n, arr) {
  const arrList = [];
  arr.forEach((el) => {
    let temp = "0".repeat(n - el.toString(2).length) + el.toString(2);
    arrList.push(temp);
  });
  return arrList;
}
