// 프로그래머스 [1차] 프렌즈4블록 https://school.programmers.co.kr/learn/courses/30/lessons/17679

const getAndCountDeleteBlock = (m, n, map) => {
  const deleteSet = new Set(); // 지울 위치 저장하는 Set
  map.forEach((xEl, xIdx) => {
    xEl.forEach((_, yIdx) => {
      if (
        xIdx < m - 1 &&
        yIdx < n - 1 &&
        map[xIdx][yIdx] !== "." &&
        map[xIdx][yIdx] === map[xIdx + 1][yIdx] &&
        map[xIdx][yIdx] === map[xIdx][yIdx + 1] &&
        map[xIdx][yIdx] === map[xIdx + 1][yIdx + 1]
      ) {
        [
          { xIdx, yIdx },
          { xIdx: xIdx + 1, yIdx },
          { xIdx, yIdx: yIdx + 1 },
          { xIdx: xIdx + 1, yIdx: yIdx + 1 },
        ].forEach((el) => deleteSet.add(el));
      }
    });
  });
  let cnt = 0;
  deleteSet.forEach((el) => {
    // Set이 object duplicated되는 걸 필터링 못해서
    if (map[el.xIdx][el.yIdx] !== ".") {
      map[el.xIdx][el.yIdx] = ".";
      cnt++;
    }
  });
  return cnt;
};

const dropBlock = (m, n, map) => {
  for (let j = 0; j < n; j++) {
    let bottom = m - 1;
    for (let i = bottom; i >= 0; i--) {
      // 밑에서부터 올라가면서 확인하기
      if (map[i][j] === ".") {
        // 빈칸을 만나면
        bottom = i;
        let top = -1;
        for (let k = bottom; k >= 0; k--) {
          if (map[k][j] !== ".") {
            map[i][j] = map[k][j];
            map[k][j] = ".";
            top = k;
            break;
          }
        }
        if (top === -1) break; // 더이상 떨어질 것이 없으므로
      }
    }
  }
};

function solution(m, n, board) {
  let answer = 0;
  const map = board.map((el) => el.split(""));
  while (true) {
    const cnt = getAndCountDeleteBlock(m, n, map);
    if (cnt === 0) break;
    answer += cnt;
    dropBlock(m, n, map);
  }
  return answer;
}
