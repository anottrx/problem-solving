--프로그래머스 헤비 유저가 소유한 장소 https://school.programmers.co.kr/learn/courses/30/lessons/77487

SELECT ID, NAME, P.HOST_ID
FROM PLACES P, 
	(SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(HOST_ID) > 1) A
WHERE P.HOST_ID IN (A.HOST_ID)
ORDER BY ID
;