// 프로그래머스 개인정보 수집 유효기간 https://school.programmers.co.kr/learn/courses/30/lessons/150370

const getDaysCount = (day) => {
  const daySplited = day.split(".").map(Number);
  return (daySplited[0] - 2000) * 12 * 28 + daySplited[1] * 28 + daySplited[2];
};

function solution(today, terms, privacies) {
  const todayDay = getDaysCount(today);

  const termMap = new Map();
  terms.forEach((term) => {
    const splited = term.split(" ");
    termMap.set(splited[0], Number(splited[1]) * 28);
  });

  return privacies.reduce(function (acc, privacy, index) {
    const privacySplited = privacy.split(" ");
    const befDay = getDaysCount(privacySplited[0]);
    if (todayDay >= befDay + termMap.get(privacySplited[1]))
      acc = [...acc, index + 1];
    return acc;
  }, []);
}
