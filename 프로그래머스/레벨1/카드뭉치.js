// 프로그래머스 카드 뭉치 https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let answer = "No";
  let [goalIndex, cardIndex1, cardIndex2] = [0, 0, 0];
  while (goalIndex < goal.length) {
    if (cardIndex1 < cards1.length && goal[goalIndex] === cards1[cardIndex1]) {
      cardIndex1++;
    } else if (
      cardIndex2 < cards2.length &&
      goal[goalIndex] === cards2[cardIndex2]
    ) {
      cardIndex2++;
    } else {
      break;
    }
    goalIndex++;
  }
  if (goalIndex === goal.length) {
    answer = "Yes";
  }
  return answer;
}
