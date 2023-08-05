-- 프로그래머스 NULL 처리하기 https://school.programmers.co.kr/learn/courses/30/lessons/59410?language=oracle

SELECT ANIMAL_TYPE, 
CASE WHEN NAME IS NULL THEN 'No name'
ELSE NAME
END AS NAME
, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
