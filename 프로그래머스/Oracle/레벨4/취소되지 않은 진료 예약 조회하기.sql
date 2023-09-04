--프로그래머스 취소되지 않은 진료 예약 조회하기 https://school.programmers.co.kr/learn/courses/30/lessons/132204

SELECT APNT_NO, PT_NAME, P.PT_NO, A.MCDP_CD, DR_NAME, APNT_YMD
FROM PATIENT P, DOCTOR D, APPOINTMENT A
WHERE P.PT_NO = A.PT_NO
	AND DR_ID = MDDR_ID
    AND A.MCDP_CD = 'CS'
    AND TO_CHAR(APNT_YMD, 'YYYYMMDD') = '20220413'
    AND APNT_CNCL_YN = 'N'
ORDER BY APNT_YMD
;