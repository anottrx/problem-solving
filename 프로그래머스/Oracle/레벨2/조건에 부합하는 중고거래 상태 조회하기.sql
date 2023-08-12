--프로그래머스 조건에 부합하는 중고거래 상태 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/164672

SELECT BOARD_ID, WRITER_ID, TITLE, PRICE, 
CASE WHEN STATUS = 'SALE' THEN '판매중'
    WHEN STATUS = 'RESERVED' THEN '예약중'
    ELSE '거래완료' 
    END AS STATUS
FROM USED_GOODS_BOARD
WHERE TO_CHAR(CREATED_DATE, 'YYYY-MM-DD') = '2022-10-05'
ORDER BY BOARD_ID DESC
;
