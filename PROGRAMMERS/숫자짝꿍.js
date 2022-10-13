// 프로그래머스 숫자 짝꿍 https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const nums = new Array(11).fill(0);
  X.split("").forEach((el) => {
    nums[el]++;
  });
  const res = new Array(11).fill(0);
  Y.split("").forEach((el) => {
    if (nums[el] > 0) {
      nums[el]--;
      res[el]++;
    }
  });

  let answer = "";
  res.reverse().forEach((el, index) => {
    if (el > 0) answer += String(10 - index).repeat(el);
  });
  if (answer.startsWith("0") && answer.length > 1) {
    let zeroIndex = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer.charAt(i) !== "0") break;
      else zeroIndex++;
    }
    answer = answer.slice(zeroIndex - 1, answer.length);
  }
  return answer === "" ? "-1" : answer;
}
