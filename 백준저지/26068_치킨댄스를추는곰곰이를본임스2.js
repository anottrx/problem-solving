// 백준저지 치킨댄스를 추는 곰곰이를 본 임스 2 https://www.acmicpc.net/problem/26068

const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = arr
  .map((data) => {
    const splited = data.split("D-");
    if (Number(splited[1]) <= 90) return 1;
    return 0;
  })
  .reduce((prev, cur) => prev + cur, 0);

console.log(answer);
