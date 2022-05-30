// 프로그래머스 신고 결과 받기 https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const answer = [];

  const reportedMap = new Map();
  const reportListSet = new Set();
  report.forEach((el) => {
    const splited = el.split(" ");
    if (!reportListSet.has([splited[0], splited[1]].toString())) {
      reportListSet.add([splited[0], splited[1]].toString());
      if (reportedMap.has(splited[1])) {
        let cur = reportedMap.get(splited[1]) + 1;
        reportedMap.delete(splited[1]);
        reportedMap.set(splited[1], cur);
      } else {
        reportedMap.set(splited[1], 1);
      }
    }
  });

  const reportedPeopleSet = new Set();
  id_list.map((el) => {
    if (reportedMap.get(el) >= k) {
      reportedPeopleSet.add(el);
    }
  });

  for (let i = 0; i < id_list.length; i++) {
    let count = 0;
    reportedPeopleSet.forEach((el) => {
      if (reportListSet.has([id_list[i], el].toString())) {
        count++;
      }
    });
    answer.push(count);
  }
  return answer;
}
