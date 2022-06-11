// 프로그래머스 키패드 누르기 https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = "";
  let curL = 10,
    curR = 12;
  let h = hand.charAt(0).toUpperCase();
  numbers.forEach((el) => {
    if (el === 0) {
      el = 11;
    }
    if ([1, 4, 7].includes(el)) {
      curL = el;
      answer += "L";
    } else if ([3, 6, 9].includes(el)) {
      curR = el;
      answer += "R";
    } else {
      let distL =
        Math.floor(Math.abs(curL - el) / 3) + (Math.abs(curL - el) % 3);
      let distR =
        Math.floor(Math.abs(curR - el) / 3) + (Math.abs(curR - el) % 3);
      if (distL > distR) {
        curR = el;
        answer += "R";
      } else if (distL < distR) {
        curL = el;
        answer += "L";
      } else {
        answer += h;
        if (h === "R") {
          curR = el;
        } else {
          curL = el;
        }
      }
    }
  });
  return answer;
}
