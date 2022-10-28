// 프로그래머스 안전지대 https://school.programmers.co.kr/learn/courses/30/lessons/120866

const d = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function solution(board) {
  let n = board.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let dd = 0; dd < d.length; dd++) {
          const dx = i + d[dd][0];
          const dy = j + d[dd][1];
          if (dx >= 0 && dx < n && dy >= 0 && dy < n && board[dx][dy] !== 1)
            board[dx][dy] = 2;
        }
      }
    }
  }
  return board.reduce(
    (prev, cur) => prev + cur.filter((v) => v === 0).length,
    0
  );
}
