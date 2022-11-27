// 프로그래머스 단어 변환 https://school.programmers.co.kr/learn/courses/30/lessons/43163

let answer = Number.MAX_SAFE_INTEGER;

const dfs = (begin, target, words, count, visited) => {
  count++;
  for (let i = 0; i < words.length; i++) {
    let diffCount = 0;
    for (let j = 0; j < begin.length; j++) {
      if (begin.charAt(j) !== words[i].charAt(j)) diffCount++;
      if (diffCount > 1) break;
    }
    if (diffCount === 1 && !visited[i]) {
      if (words[i] === target) answer = Math.min(answer, count);
      else {
        visited[i] = true;
        dfs(words[i], target, words, count, visited);
        visited[i] = false;
      }
    }
  }
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const visited = new Array(words.length).fill(false);
  dfs(begin, target, words, 0, visited);
  return answer;
}
