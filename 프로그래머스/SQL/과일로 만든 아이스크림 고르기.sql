-- 프로그래머스 과일로 만든 아이스크림 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/133025

SELECT FIRST_HALF.FLAVOR
    FROM FIRST_HALF, ICECREAM_INFO
    WHERE FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR 
        AND INGREDIENT_TYPE = 'fruit_based' 
        AND TOTAL_ORDER > 3000
    ORDER BY FIRST_HALF.TOTAL_ORDER DESC;