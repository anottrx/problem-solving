// 프로그래머스 가장 큰 정사각형 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = 0;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      answer = Math.max(answer, board[i][j]); // 초기화
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (
        board[i - 1][j - 1] > 0 &&
        board[i][j - 1] > 0 &&
        board[i - 1][j] > 0 &&
        board[i][j] > 0
      ) {
        board[i][j] += Math.min(
          board[i - 1][j - 1],
          board[i][j - 1],
          board[i - 1][j]
        );
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}
