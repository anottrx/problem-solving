// 프로그래머스 영어 끝말잇기 https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const answer = [];

  const wordSet = new Set();
  wordSet.add(words[0]);
  let last = words[0].charAt(words[0].length - 1);
  for (let i = 1; i < words.length; i++) {
    let curWord = words[i];
    if (wordSet.has(curWord) || last !== curWord.charAt(0)) {
      answer.push((i % n) + 1);
      answer.push(Math.floor(i / n) + 1);
      break;
    }
    wordSet.add(curWord);
    last = curWord.charAt(curWord.length - 1);
  }

  if (answer.length === 0) {
    answer.push(0);
    answer.push(0);
  }

  return answer;
}
