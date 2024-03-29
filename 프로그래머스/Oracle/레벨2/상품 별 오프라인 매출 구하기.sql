--프로그래머스 상품 별 오프라인 매출 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/131533

SELECT PRODUCT_CODE, SUM(PRICE * SALES_AMOUNT) AS SALES
FROM PRODUCT P, OFFLINE_SALE O
WHERE P.PRODUCT_ID = O.PRODUCT_ID
GROUP BY PRODUCT_CODE
ORDER BY SALES DESC, PRODUCT_CODE
;
