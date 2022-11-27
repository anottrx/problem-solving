// 프로그래머스 파괴되지 않은 건물 https://school.programmers.co.kr/learn/courses/30/lessons/92344

function solution(board, skill) {
  const boardZero = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );

  skill.forEach((el) => {
    boardZero[el[1]][el[2]] =
      el[0] === 1
        ? boardZero[el[1]][el[2]] - el[5]
        : boardZero[el[1]][el[2]] + el[5];
    if (el[3] + 1 < board.length && el[4] + 1 < board[0].length)
      boardZero[el[3] + 1][el[4] + 1] =
        el[0] === 1
          ? boardZero[el[3] + 1][el[4] + 1] - el[5]
          : boardZero[el[3] + 1][el[4] + 1] + el[5];
    if (el[3] + 1 < board.length)
      boardZero[el[3] + 1][el[2]] =
        el[0] === 1
          ? boardZero[el[3] + 1][el[2]] + el[5]
          : boardZero[el[3] + 1][el[2]] - el[5];
    if (el[4] + 1 < board[0].length)
      boardZero[el[1]][el[4] + 1] =
        el[0] === 1
          ? boardZero[el[1]][el[4] + 1] + el[5]
          : boardZero[el[1]][el[4] + 1] - el[5];
  });

  for (let i = 0; i < boardZero.length - 1; i++) {
    for (let j = 0; j < boardZero[0].length; j++) {
      boardZero[i + 1][j] += boardZero[i][j];
    }
  }
  for (let j = 0; j < boardZero[0].length - 1; j++) {
    for (let i = 0; i < boardZero.length; i++) {
      boardZero[i][j + 1] += boardZero[i][j];
    }
  }

  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      answer = board[i][j] + boardZero[i][j] > 0 ? answer + 1 : answer;
    }
  }
  return answer;
}
