// 프로그래머스 베스트앨범 https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const genreMap = new Map();
  genres.forEach((genre, index) => {
    if (genreMap.has(genre)) {
      genreMap.set(genre, [
        ...genreMap.get(genre),
        { index, play: plays[index] },
      ]);
    } else {
      genreMap.set(genre, [{ index, play: plays[index] }]);
    }
  });

  const sorted = [];
  genreMap.forEach((value, key) => {
    const copy = value;
    copy.sort((a, b) => {
      if (a.play === b.play) return a.index - b.index;
      return b.play - a.play;
    });
    const total = copy.reduce((prev, cur) => prev + cur.play, 0);
    if (copy.length >= 2)
      sorted.push({ total, list: [copy[0].index, copy[1].index] });
    else sorted.push({ total, list: [copy[0].index] });
  });

  sorted.sort((a, b) => b.total - a.total);
  return sorted.reduce((prev, cur) => [...prev, ...cur.list], []);
}
