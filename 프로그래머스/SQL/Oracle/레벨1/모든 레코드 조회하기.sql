-- 프로그래머스 모든 레코드 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/59034?language=oracle

SELECT ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;