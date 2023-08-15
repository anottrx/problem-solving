--프로그래머스 오랜 기간 보호한 동물(2) https://school.programmers.co.kr/learn/courses/30/lessons/59411?language=oracle

SELECT ANIMAL_ID, NAME
FROM (
    SELECT I.ANIMAL_ID, I.NAME
    FROM ANIMAL_INS I, ANIMAL_OUTS O
    WHERE I.ANIMAL_ID = O.ANIMAL_ID
    ORDER BY O.DATETIME - I.DATETIME DESC
)
WHERE ROWNUM <= 2
;