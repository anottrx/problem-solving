function solution(numbers) {
  let answer = 0;

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.map((x) => {
    if (num.includes(x)) {
      num[x] = 0;
    }
  });
  num.map((x) => {
    answer = answer + x;
  });

  return answer;
}
