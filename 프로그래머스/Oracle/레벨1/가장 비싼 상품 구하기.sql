-- 프로그래머스 가장 비싼 상품 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/131697?language=oracle

SELECT PRICE AS MAX_PRICE
FROM  (
    SELECT *
    FROM PRODUCT
    ORDER BY PRICE DESC
)
WHERE ROWNUM <= 1;
