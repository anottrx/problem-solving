// 프로그래머스 게임 맵 최단거리 https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  let answer = -1;

  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const q = [];
  q.push([0, 0, 0]);
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false),
  );
  visited[0][0] = true;

  while (q.length !== 0) {
    const cur = q.shift();
    if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) {
      answer = cur[2] + 1;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let dx = cur[0] + d[i][0];
      let dy = cur[1] + d[i][1];
      if (
        dx >= 0 &&
        dx < maps.length &&
        dy >= 0 &&
        dy < maps[0].length &&
        !visited[dx][dy] &&
        maps[dx][dy] === 1
      ) {
        q.push([dx, dy, cur[2] + 1]);
        visited[dx][dy] = true;
      }
    }
  }

  return answer;
}
