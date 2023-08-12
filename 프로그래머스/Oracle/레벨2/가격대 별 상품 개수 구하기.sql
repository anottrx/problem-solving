--프로그래머스 가격대 별 상품 개수 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/131530

SELECT TRUNC(PRICE, -4) PRICE_GROUP, COUNT(TRUNC(PRICE, -4)) PRODUCTS
FROM PRODUCT
GROUP BY TRUNC(PRICE, -4)
ORDER BY PRICE_GROUP
;