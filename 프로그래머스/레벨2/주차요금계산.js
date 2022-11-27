// 프로그래머스 주차 요금 계산 https://school.programmers.co.kr/learn/courses/30/lessons/92341

const getTime = ({ inTime, outTime }) => {
  const inTimeSplited = inTime.split(":"),
    outTimeSplited = outTime.split(":");
  const inHour = Number(inTimeSplited[0]),
    inMin = Number(inTimeSplited[1]),
    outHour = Number(outTimeSplited[0]),
    outMin = Number(outTimeSplited[1]);
  let time = outMin - inMin < 0 ? outMin - inMin + 60 : outMin - inMin;
  time +=
    outMin - inMin < 0 ? (outHour - inHour - 1) * 60 : (outHour - inHour) * 60;
  return time;
};

const getCost = ({ time, fees }) => {
  if (time <= fees[0]) return fees[1]; // 기본
  return Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
};

function solution(fees, records) {
  const inMap = new Map(); // key:차량번호, value:시간
  const carMap = new Map(); // key:차량번호, value:금액
  records.forEach((el) => {
    const splited = el.split(" ");
    if (splited[2] === "IN") {
      inMap.set(splited[1], splited[0]);
    } else {
      // OUT
      const time = getTime({
        inTime: inMap.get(splited[1]),
        outTime: splited[0],
      });
      inMap.delete(splited[1]);
      carMap.has(splited[1])
        ? carMap.set(splited[1], carMap.get(splited[1]) + time)
        : carMap.set(splited[1], time);
    }
  });
  for (const [key, value] of inMap) {
    // OUT 안 한 경우
    const time = getTime({
      inTime: value,
      outTime: "23:59",
    });
    carMap.has(key)
      ? carMap.set(key, carMap.get(key) + time)
      : carMap.set(key, time);
  }

  const answer = [];
  for (const [key, value] of carMap) {
    answer.push({ carNum: key, cost: getCost({ time: value, fees }) });
  }
  return answer
    .sort((a, b) => Number(a.carNum) - Number(b.carNum))
    .reduce((prev, cur) => [...prev, cur.cost], []);
}
