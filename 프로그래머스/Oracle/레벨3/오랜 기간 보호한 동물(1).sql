--프로그래머스 오랜 기간 보호한 동물(1) https://school.programmers.co.kr/learn/courses/30/lessons/59044?language=oracle

SELECT NAME, DATETIME
FROM (
	SELECT I.NAME, I.DATETIME
    FROM ANIMAL_INS I, ANIMAL_OUTS O
    WHERE I.ANIMAL_ID = O.ANIMAL_ID(+)
    	AND O.ANIMAL_ID IS NULL
    ORDER BY DATETIME ASC
)
WHERE ROWNUM <= 3
;
