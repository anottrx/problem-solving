// 프로그래머스 삼총사 https://school.programmers.co.kr/learn/courses/30/lessons/131705

const getCombination = (arr, selectedCount, totalCount) => {
  const result = [];
  if (selectedCount === totalCount) return arr.map((el) => [el]);

  arr.forEach((cur, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectedCount + 1, totalCount);
    const attach = combination.map((el) => [cur, ...el]);
    result.push(...attach);
  });
  return result;
};

function solution(number) {
  const result = getCombination(number, 1, 3);
  return result.filter((el) => el[0] + el[1] + el[2] === 0).length;
}
