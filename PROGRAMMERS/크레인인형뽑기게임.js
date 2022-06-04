// 프로그래머스 크레인 인형뽑기 게임 https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;

  const N = board[0].length;
  const boardList = [];
  for (let i = 0; i < N; i++) {
    boardList.push([]);
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] !== 0) {
        const tempBoard = boardList[j];
        tempBoard.push(board[i][j]);
        boardList[j] = tempBoard;
      }
    }
  }

  const stack = [];
  moves.forEach((el) => {
    if (boardList[el - 1].length > 0) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === boardList[el - 1][0]
      ) {
        stack.pop();
        answer++;
      } else {
        stack.push(boardList[el - 1][0]);
      }
      boardList[el - 1].shift();
    }
  });

  return answer * 2;
}
