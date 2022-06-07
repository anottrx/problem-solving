// 프로그래머스 [1차] 다트 게임 https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let answer = 0;

  const numMap = new Map();
  numMap.set("S", 1);
  numMap.set("D", 2);
  numMap.set("T", 3);

  const strList = dartResult.split("");
  for (let i = 0; i < strList.length - 1; i++) {
    if (strList[i] === "1" && strList[i + 1] === "0") {
      strList[i] = "10";
      strList[i + 1] = "-";
    }
  }
  for (let i = 0; i < strList.length; i++) {
    if (strList[i] === "-") {
      strList.splice(i, 1);
    }
  }

  const numList = new Array(strList.length).fill(0);
  let numIndex = 0;
  for (let i = 0; i < strList.length; i++) {
    if (strList[i].match(/[0-9]/i)) {
      numList[numIndex] = Number(strList[i]);
      numIndex++;
    } else if (strList[i].match(/[S,D,T]/i)) {
      numList[numIndex - 1] = Math.pow(
        numList[numIndex - 1],
        numMap.get(strList[i])
      );
    } else if (strList[i] === "*") {
      numList[numIndex - 1] = numList[numIndex - 1] * 2;
      if (numIndex > 1) {
        numList[numIndex - 2] *= 2;
      }
    } else if (strList[i] === "#") {
      numList[numIndex - 1] *= -1;
    }
  }

  for (let i = 0; i < numList.length; i++) {
    answer += numList[i];
  }
  return answer;
}
