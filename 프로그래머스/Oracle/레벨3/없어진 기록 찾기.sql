--프로그래머스 없어진 기록 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/59042?language=oracle

SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_INS I, ANIMAL_OUTS O
WHERE I.ANIMAL_ID(+) = O.ANIMAL_ID
	AND I.ANIMAL_ID IS NULL
ORDER BY O.ANIMAL_ID, O.NAME
;