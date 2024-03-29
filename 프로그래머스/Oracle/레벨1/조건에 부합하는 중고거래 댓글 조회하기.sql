-- 프로그래머스 조건에 부합하는 중고거래 댓글 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/164673

SELECT TITLE, r.BOARD_ID, REPLY_ID, r.WRITER_ID, r.CONTENTS, TO_CHAR(r.CREATED_DATE, 'YYYY-MM-DD') CREATED_DATE
FROM USED_GOODS_BOARD b, USED_GOODS_REPLY r
WHERE b.BOARD_ID = r.BOARD_ID
	AND TO_CHAR(b.CREATED_DATE, 'YYYYMM') = '202210'
ORDER BY r.CREATED_DATE, TITLE;
