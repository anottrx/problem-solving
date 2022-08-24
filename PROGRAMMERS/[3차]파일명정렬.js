// 프로그래머스 [3차] 파일명 정렬 https://school.programmers.co.kr/learn/courses/30/lessons/17686

const divideFile = (file, index) => {
  const splited = file.split(/[0-9]/);
  const head = splited[0].toUpperCase();
  const numbers = file.match(/[0-9]*/g);
  const number = numbers.filter((el) => el !== "")[0];
  return { head, number: number.substring(0, 5), index, file };
};

function solution(files) {
  const splited = files.map((el, index) => divideFile(el, index));
  let answer = splited.sort((a, b) => {
    if (a.head === b.head) {
      if (Number(a.number) === Number(b.number)) return a.index - b.index;
      return Number(a.number) - Number(b.number);
    }
    return a.head.localeCompare(b.head);
  });
  answer = answer.map((el) => el.file);
  return answer;
}
