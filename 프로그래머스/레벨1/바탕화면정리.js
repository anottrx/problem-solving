// 프로그래머스 바탕화면 정리 https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  let answer = [wallpaper.length + 1, wallpaper[0].length + 1, 0, 0];
  wallpaper.forEach((line, x) => {
    const splited = line.split("");
    splited.forEach((pos, y) => {
      if (pos === "#") {
        answer = [
          Math.min(answer[0], x),
          Math.min(answer[1], y),
          Math.max(answer[2], x + 1),
          Math.max(answer[3], y + 1),
        ];
      }
    });
  });
  return answer;
}
