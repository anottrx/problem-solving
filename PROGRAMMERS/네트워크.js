// 프로그래머스 네트워크 https://school.programmers.co.kr/learn/courses/30/lessons/43162

const move = (visited, index, computers) => {
  visited[index] = true;
  for (let i = 0; i < computers.length; i++) {
    if (!visited[i] && computers[index][i] === 1) move(visited, i, computers);
  }
};

function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);
  visited.forEach((el, index) => {
    if (!el) {
      move(visited, index, computers);
      answer++;
    }
  });
  return answer;
}
