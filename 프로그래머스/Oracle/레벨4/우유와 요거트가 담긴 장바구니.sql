--프로그래머스 우유와 요거트가 담긴 장바구니 https://school.programmers.co.kr/learn/courses/30/lessons/62284

SELECT DISTINCT M.CART_ID
FROM 
	(SELECT CART_ID FROM CART_PRODUCTS WHERE NAME = 'Milk') M,
    (SELECT CART_ID FROM CART_PRODUCTS WHERE NAME = 'Yogurt') Y
WHERE M.CART_ID = Y.CART_ID
ORDER BY M.CART_ID
;