--프로그래머스 식품분류별 가장 비싼 식품의 정보 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/131116

SELECT DISTINCT CATEGORY, MAX_PRICE, PRODUCT_NAME
FROM FOOD_PRODUCT,
	(SELECT MAX(PRICE) AS MAX_PRICE
    FROM FOOD_PRODUCT
    GROUP BY CATEGORY)
WHERE MAX_PRICE = PRICE
	AND CATEGORY IN ('과자', '국', '김치', '식용유')
ORDER BY MAX_PRICE DESC
;