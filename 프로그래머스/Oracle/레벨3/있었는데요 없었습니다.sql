--프로그래머스 있었는데요 없었습니다 https://school.programmers.co.kr/learn/courses/30/lessons/59043?language=oracle

SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I, ANIMAL_OUTS O
WHERE I.ANIMAL_ID = O.ANIMAL_ID
	AND I.DATETIME > O.DATETIME
ORDER BY I.DATETIME
;