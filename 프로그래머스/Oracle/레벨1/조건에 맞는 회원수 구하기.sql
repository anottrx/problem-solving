-- 프로그래머스 조건에 맞는 회원수 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/131535?language=oracle

SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE 1 = 1
    AND TO_CHAR(JOINED, 'YYYY') = '2021'
    AND AGE >= 20 
    AND AGE <= 29;