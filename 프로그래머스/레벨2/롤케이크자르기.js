// 프로그래머스 롤케이크 자르기 https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  var answer = 0;
  const old = new Map();
  const young = new Map();
  old.set(topping[0], 1);
  for (let i = 1; i < topping.length; i++) {
    if (young.has(topping[i])) young.set(topping[i], young.get(topping[i]) + 1);
    else young.set(topping[i], 1);
  }
  for (let i = 1; i < topping.length; i++) {
    // 철수가 하나 가져가기
    if (old.has(topping[i])) old.set(topping[i], old.get(topping[i]) + 1);
    else old.set(topping[i], 1);
    // 동생이 하나 빼기
    if (young.get(topping[i]) > 1)
      young.set(topping[i], young.get(topping[i]) - 1);
    else young.delete(topping[i]);
    // 비교하기
    if (old.size === young.size) answer++;
  }
  return answer;
}
