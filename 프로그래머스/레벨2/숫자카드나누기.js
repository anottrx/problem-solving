// 프로그래머스 숫자 카드 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/135807

const getDivideNumber = (array) => {
  let result = -1;
  array.sort();
  for (let i = 2; i <= array[0]; i++) {
    let temp = i;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % i !== 0) {
        temp = -1;
        break;
      }
    }
    if (temp !== -1) result = Math.max(result, temp);
  }
  return result;
};

const getNotDivideNumber = (num, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % num === 0) return 0;
  }
  return num;
};

function solution(arrayA, arrayB) {
  const a = getDivideNumber(arrayA);
  const b = getDivideNumber(arrayB);
  return Math.max(getNotDivideNumber(b, arrayA), getNotDivideNumber(a, arrayB));
}
