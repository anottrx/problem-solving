--프로그래머스 진료과별 총 예약 횟수 출력하기 https://school.programmers.co.kr/learn/courses/30/lessons/132202

SELECT MCDP_CD AS "진료과코드", count(*) AS "5월예약건수"
FROM APPOINTMENT
WHERE TO_CHAR(APNT_YMD, 'MM') = '05'
GROUP BY MCDP_CD
ORDER BY "5월예약건수", "진료과코드";
