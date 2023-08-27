--프로그래머스 보호소에서 중성화한 동물 https://school.programmers.co.kr/learn/courses/30/lessons/59045?language=oracle

SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I, ANIMAL_OUTS O
WHERE I.ANIMAL_ID = O.ANIMAL_ID
	AND SEX_UPON_INTAKE != SEX_UPON_OUTCOME
ORDER BY ANIMAL_ID
;