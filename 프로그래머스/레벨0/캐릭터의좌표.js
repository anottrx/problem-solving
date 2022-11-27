// 프로그래머스 캐릭터의 좌표 https://school.programmers.co.kr/learn/courses/30/lessons/120861

const map = new Map();
map
  .set("left", [-1, 0])
  .set("right", [1, 0])
  .set("up", [0, 1])
  .set("down", [0, -1]);

function solution(keyinput, board) {
  const answer = [0, 0];
  const height = Math.floor(board[0] / 2),
    width = Math.floor(board[1] / 2);
  keyinput.forEach((key) => {
    const move = map.get(key);
    const x = answer[0] + move[0],
      y = answer[1] + move[1];
    if (x >= -1 * height && x <= height && y >= -1 * width && y <= width) {
      (answer[0] = x), (answer[1] = y);
    }
  });
  return answer;
}
