-- 프로그래머스 인기있는 아이스크림 https://school.programmers.co.kr/learn/courses/30/lessons/133024?language=oracle

SELECT FLAVOR
FROM FIRST_HALF
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID;