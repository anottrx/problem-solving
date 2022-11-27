// 백준저지 14465번 소가 길을 건너간 이유 5 https://www.acmicpc.net/problem/14465

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken()); // 횡단보도 N (1 ≤ N ≤ 100,000)개
        int K = Integer.parseInt(st.nextToken()); // 연속한 K개의 신호등이 존재하도록
        int B = Integer.parseInt(st.nextToken()); // 고장난 신호등 개수
        boolean[] brokenLight = new boolean[N + 1];
        for (int i = 0; i < B; i++) {
            int num = Integer.parseInt(br.readLine());
            brokenLight[num] = true; // true:고장남, false:정상작동
        }

        int brokenCnt = 0; // 고장난 신호등 개수 -> 사실상 고친 신호등 개수
        for (int i = 1; i <= K; i++) {
            if (brokenLight[i]) { // 고장난 신호등 개수 세기
                brokenCnt++;
            }
        }
        int min = brokenCnt; // 1번~K번 중 고장난 신호등 개수를 min값이라고 초기화
        for (int i = K + 1; i <= N; i++) { // 슬라이딩 윈도우
            if (brokenLight[i - K]) { // 한칸 지나간 신호등이 고장났었다면 cnt 1 감소
                brokenCnt--;
            }
            if (brokenLight[i]) { // 새로 받은 신호등이 고장났었다면 cnt 1 증가
                brokenCnt++;
            }
            min = Math.min(min, brokenCnt); // 최솟값 매번 갱신
        }
        System.out.println(min);
    }
}
