// 프로그래머스 튜플 https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const answer = [];
  let start = 0;
  const temp = [];
  for (let i = 1; i < s.length - 1; i++) {
    if (s.charAt(i) === "{") {
      start = i;
    } else if (s.charAt(i) === "}") {
      temp.push(s.slice(start, i + 1));
    }
  }
  temp.sort(function (a, b) {
    return a.length > b.length ? 1 : -1;
  });

  const set = new Set();
  temp.forEach((el) => {
    const numList = el.slice(1, el.length - 1).split(",");
    for (let i = 0; i < numList.length; i++) {
      if (!set.has(Number(numList[i]))) {
        set.add(Number(numList[i]));
        answer.push(Number(numList[i]));
      }
    }
  });
  return answer;
}
