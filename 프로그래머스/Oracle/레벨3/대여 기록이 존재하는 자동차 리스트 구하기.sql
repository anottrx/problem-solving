--프로그래머스 대여 기록이 존재하는 자동차 리스트 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/157341

SELECT DISTINCT C.CAR_ID
FROM CAR_RENTAL_COMPANY_CAR C, CAR_RENTAL_COMPANY_RENTAL_HISTORY H
WHERE CAR_TYPE = '세단'
	AND TO_CHAR(START_DATE, 'MM') = '10'
	AND C.CAR_ID = H.CAR_ID
ORDER BY C.CAR_ID DESC
;