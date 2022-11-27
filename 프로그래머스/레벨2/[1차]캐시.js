// 프로그래머스 [1차] 캐시 https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let answer = 0;
  const cacheList = [];
  cities.forEach((city) => {
    city = city.toLowerCase();
    let posIndex = -1;
    cacheList.forEach((el, index) => {
      if (el === city) {
        posIndex = index;
      }
    });
    if (posIndex !== -1) {
      // cache hit
      cacheList.splice(posIndex, 1);
      cacheList.unshift(city);
      answer++;
    } else {
      // cache miss
      cacheList.unshift(city);
      if (cacheList.length > cacheSize) {
        cacheList.splice(cacheList.length - 1, 1);
      }
      answer += 5;
    }
  });
  return answer;
}
