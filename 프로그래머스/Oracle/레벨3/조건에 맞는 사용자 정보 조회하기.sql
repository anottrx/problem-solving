--프로그래머스 조건에 맞는 사용자 정보 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/164670

SELECT USER_ID, NICKNAME, CITY || ' ' || STREET_ADDRESS1 || ' ' || STREET_ADDRESS2 AS "전체주소", SUBSTR(TLNO, 0, 3) || '-' || SUBSTR(TLNO, 4, 4) || '-' || SUBSTR(TLNO, 8, 4) AS "전화번호"
FROM USED_GOODS_BOARD B, USED_GOODS_USER U
WHERE WRITER_ID = USER_ID
GROUP BY user_id, nickname, CITY || ' ' || STREET_ADDRESS1 || ' ' || STREET_ADDRESS2, TLNO
HAVING COUNT(BOARD_ID) >= 3
ORDER BY USER_ID DESC
;