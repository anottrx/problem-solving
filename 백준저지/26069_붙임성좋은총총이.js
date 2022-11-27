// 백준저지 붙임성 좋은 총총이 https://www.acmicpc.net/problem/26069

const fs = require("fs");
const [n, ...inputArr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dancingSet = new Set(["ChongChong"]);
inputArr.forEach((list) => {
  const names = list.split(" ");
  if (dancingSet.has(names[0]) || dancingSet.has(names[1]))
    dancingSet.add(names[0]).add(names[1]);
});

console.log(dancingSet.size);
