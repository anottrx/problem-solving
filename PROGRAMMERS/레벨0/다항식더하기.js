// 프로그래머스 다항식 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const splited = polynomial.split(" ");
  let totalNum = 0,
    totalX = 0;
  splited.forEach((v) => {
    if (+v == v) totalNum += +v;
    else if (v === "x") totalX += 1;
    else if (v.charAt(v.length - 1) === "x")
      totalX += +v.slice(0, v.length - 1);
  });

  return (
    (totalX === 0 ? "" : totalX === 1 ? "x" : totalX + "x") +
    (totalX !== 0 && totalNum !== 0 ? " + " : "") +
    (totalNum === 0 ? "" : totalNum) +
    (totalX === 0 && totalNum === 0 ? "0" : "")
  );
}
