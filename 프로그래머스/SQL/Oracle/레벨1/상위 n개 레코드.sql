-- 프로그래머스 상위 n개 레코드 https://school.programmers.co.kr/learn/courses/30/lessons/59405?language=oracle

SELECT NAME
FROM (
    SELECT *
    FROM ANIMAL_INS
    ORDER BY DATETIME
) 
WHERE ROWNUM <= 1;
