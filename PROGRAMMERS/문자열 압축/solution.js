function solution(s) {
  let answer = s.length;

  if (answer !== 1) {
    for (let i = 1; i < s.length / 2 + 1; i++) {
      let cnt = 1; // 쪼갠 단위 개수는 1부터 시작
      let checkStr = s.substring(0, i); // 처음부터 i개만큼 문자 우선 저장
      let makeStr = checkStr; // 압축 문자열 결과물 (문제와 다르게 a2b2ac3 형태로 출력할 것)
      let last = 0; // 맨마지막에 단위 길이 부족으로 출력 못한 문자도 makeStr에 포함하기 위함

      for (let j = i; j < s.length - i + 1; j = j + i) {
        last = j + i; // 마지막 위치 매번 저장
        let cur = s.substring(j, j + i);
        if (checkStr === cur) {
          // 이전 단위와 동일하면 cnt 증가
          cnt++;
        } else {
          // 다르다면
          if (cnt !== 1) {
            // 2개 이상의 단위가 반복되었다면 반복한 횟수를 문자열 결과물에 더할 것
            makeStr = makeStr + String(cnt);
            cnt = 1;
          }
          checkStr = cur; // 새로운 문자 단위 저장
          makeStr = makeStr + checkStr; // 문자열 결과물에 단위 합치기
        }
      }
      if (cnt !== 1) {
        // 다 끝나고 나왔을 때 2번 이상 반복되었다면 횟수를 문자열 결과물에 더할 것
        makeStr = makeStr + String(cnt);
      }
      // 다 끝났는데 길이 부족으로 출력 못한 것은 (s.length() - last)만큼 더해 길이 계산 제대로 하기
      answer = Math.min(answer, makeStr.length + (s.length - Number(last)));
    }
  }
  return answer;
}
