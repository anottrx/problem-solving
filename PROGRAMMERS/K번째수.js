// 프로그래머스 K번째 수 https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = commands.map((el) => {
    const arr = array
      .filter((_, idx) => idx >= el[0] - 1 && idx <= el[1] - 1)
      .sort(function (a, b) {
        return a - b;
      });
    return arr[el[2] - 1];
  });

  return answer;
}

function befSolution(array, commands) {
  var answer = [];

  commands.forEach((l) => {
    const arr = array.slice(l[0] - 1, l[1]);
    arr.sort(function (a, b) {
      return a - b;
    });
    answer.push(arr[l[2] - 1]);
  });

  return answer;
}
