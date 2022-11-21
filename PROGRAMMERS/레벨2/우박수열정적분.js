// 프로그래머스 우박수열 정적분 https://school.programmers.co.kr/learn/courses/30/lessons/134239

const makeNumber = (k) => {
  let index = 0;
  const result = [[index++, k]];
  while (k !== 1) {
    k = k % 2 === 1 ? k * 3 + 1 : k / 2;
    result.push([index++, k]);
  }
  return result;
};

const getArea = (a, b) => {
  return a > b ? a + (b - a) / 2 : b + (a - b) / 2;
};

function solution(k, ranges) {
  const result = makeNumber(k);
  let num = result.length;
  const areaList = [];
  for (let i = 0; i < num - 1; i++) {
    const area = getArea(result[i][1], result[i + 1][1]);
    areaList.push(area);
  }

  return ranges
    .map((input) => {
      if (input[0] > num + input[1] - 1) return -1;
      let area = 0;
      for (let i = input[0]; i < num + input[1] - 1; i++) {
        area += areaList[i];
      }
      return area;
    })
    .map((num) => Number.parseFloat(num).toFixed(1));
}
