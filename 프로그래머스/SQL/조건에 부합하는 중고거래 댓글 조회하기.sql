-- 프로그래머스 조건에 부합하는 중고거래 댓글 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/164673

SELECT TITLE, USED_GOODS_REPLY.BOARD_ID AS BOARD_ID, REPLY_ID, USED_GOODS_REPLY.WRITER_ID AS WRITER_ID, USED_GOODS_REPLY.CONTENTS AS CONTENTS, TO_CHAR(USED_GOODS_REPLY.CREATED_DATE, 'YYYY-MM-DD') AS CREATED_DATE
    FROM USED_GOODS_BOARD 
        JOIN USED_GOODS_REPLY 
        ON USED_GOODS_BOARD.BOARD_ID = USED_GOODS_REPLY.BOARD_ID
    WHERE TO_CHAR(USED_GOODS_BOARD.CREATED_DATE, 'YYYY-MM') = '2022-10'
    ORDER BY USED_GOODS_REPLY.CREATED_DATE, TITLE