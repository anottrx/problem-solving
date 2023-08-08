--프로그래머스 루시와 엘라 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/59046?language=oracle

SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE REGEXP_LIKE(NAME, 'Lucy|Ella|Pickle|Rogan|Sabrina|Mitty')
ORDER BY ANIMAL_ID
;
