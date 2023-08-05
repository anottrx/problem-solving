--프로그래머스 중성화 여부 파악하기 https://school.programmers.co.kr/learn/courses/30/lessons/59409?language=oracle

SELECT ANIMAL_ID, NAME, 
CASE WHEN REGEXP_LIKE(SEX_UPON_INTAKE, 'Neutered|Spayed') THEN 'O'
ELSE 'X'
END AS "중성화"
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
;