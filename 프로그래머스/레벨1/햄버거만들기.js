// 프로그래머스 햄버거 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let answer = 0;
  ingredient = ingredient.join("");
  const stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    let sLen = stack.length;
    if (
      ingredient[i] === "1" &&
      sLen >= 3 &&
      stack[sLen - 3] + stack[sLen - 2] + stack[sLen - 1] + ingredient[i] ===
        "1231"
    ) {
      stack.splice(sLen - 3, sLen);
      answer++;
    } else {
      stack.push(ingredient[i]);
    }
  }
  return answer;
}

function failed(ingredient) {
  // 테스트케이스 12번만 시간 초과 나는 코드
  let answer = 0;
  ingredient = ingredient.join("");
  while (true) {
    let befLength = ingredient.length;
    ingredient = ingredient.replace(/1231/i, "");
    if (befLength === ingredient.length) break;
    answer += (befLength - ingredient.length) / 4;
  }
  return answer;
}
