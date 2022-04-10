// 프로그래머스 숫자 문자열과 영단어 https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let answer = Number(
    s
      .replace(/zero/g, 0)
      .replace(/one/g, '1')
      .replace(/two/g, '2')
      .replace(/three/g, '3')
      .replace(/four/g, '4')
      .replace(/five/g, '5')
      .replace(/six/g, '6')
      .replace(/seven/g, '7')
      .replace(/eight/g, '8')
      .replace(/nine/g, '9'),
  );
  return answer;
}
