// 프로그래머스 성격 유형 검사하기 https://school.programmers.co.kr/learn/courses/30/lessons/118666

const typeMap = new Map(); // 각 성격별 점수 (key:성격, value:점수)
typeMap
  .set("R", 0)
  .set("T", 0)
  .set("C", 0)
  .set("F", 0)
  .set("J", 0)
  .set("M", 0)
  .set("A", 0)
  .set("N", 0);

const choiceScore = [0, 3, 2, 1, 0, 1, 2, 3]; // 매우 비동의 ~ 매우 동의

function solution(survey, choices) {
  survey.forEach((el, index) => {
    const { type, score } = getTypeScore(el, choices[index]);
    typeMap.set(type, typeMap.get(type) + score);
  });

  return (
    (typeMap.get("R") >= typeMap.get("T") ? "R" : "T") +
    (typeMap.get("C") >= typeMap.get("F") ? "C" : "F") +
    (typeMap.get("J") >= typeMap.get("M") ? "J" : "M") +
    (typeMap.get("A") >= typeMap.get("N") ? "A" : "N")
  );
}

function getTypeScore(survey, choice) {
  if (choice <= 4)
    // 비동의 (모르겠음은 나중에 처리되므로 포함되어도 상관없음)
    return { type: survey.charAt(0), score: choiceScore[choice] };
  else return { type: survey.charAt(1), score: choiceScore[choice] }; // 동의
}
