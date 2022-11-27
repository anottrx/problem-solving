// 프로그래머스 [1차] 뉴스 클러스터링 https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const list1 = makeStrList(str1);
  const list2 = makeStrList(str2);
  let cnt = 0;
  list2.forEach((el) => {
    for (let i = 0; i < list1.length; i++) {
      if (list1[i] === el) {
        cnt++;
        list1.splice(i, 1);
        break;
      }
    }
  });
  let answer = Math.floor((cnt / (list1.length + list2.length)) * 65536);
  if (list1.length === 0 && list2.length === 0) {
    // list가 모두 0이라서 null이 나올 경우
    answer = 65536;
  }
  return answer;
}

function makeStrList(str) {
  str = str.toLowerCase();
  const strList = [];
  for (let i = 0; i < str.length - 1; i++) {
    let curWord = str[i] + str[i + 1];
    if (!/[^a-z]/.test(curWord)) {
      strList.push(curWord);
    }
  }
  return strList;
}
