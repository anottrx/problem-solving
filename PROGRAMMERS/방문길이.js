// 프로그래머스 방문 길이 https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let answer = 0;
  const visited = Array.from(Array(11), () => Array(11).fill(""));
  const pos = { x: 5, y: 5 }; // [0,0]부터 [10,10]까지
  dirs.split("").forEach((el) => {
    // 해당 위치의 왼쪽과 위쪽만 확인할 것 (오른쪽과 아래는 또 다음 칸의 왼쪽과 위쪽이다)
    if (el === "U" && pos.y - 1 >= 0) {
      if ((visited[pos.x][pos.y].match(/u/g) || []).length === 0) {
        visited[pos.x][pos.y] += "u";
        answer++;
      }
      pos.y--;
    } else if (el === "D" && pos.y + 1 <= 10) {
      pos.y++;
      if ((visited[pos.x][pos.y].match(/u/g) || []).length === 0) {
        visited[pos.x][pos.y] += "u";
        answer++;
      }
    } else if (el === "R" && pos.x + 1 <= 10) {
      pos.x++;
      if ((visited[pos.x][pos.y].match(/l/g) || []).length === 0) {
        visited[pos.x][pos.y] += "l";
        answer++;
      }
    } else if (el === "L" && pos.x - 1 >= 0) {
      if ((visited[pos.x][pos.y].match(/l/g) || []).length === 0) {
        visited[pos.x][pos.y] += "l";
        answer++;
      }
      pos.x--;
    }
    // 좌표평면의 경계를 넘어가는 명령어는 무시한다
  });
  return answer;
}
