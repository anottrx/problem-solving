// 출처: 백준저지 2563번 색종이 https://www.acmicpc.net/problem/2563

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ2563 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken()); // 색종이의 수 (100 이하)
        int[][] paper = new int[101][101]; // 0부터 100까지
        Arrays.stream(paper).forEach(a -> Arrays.fill(a, 0)); // 이차원 배열 paper을 0으로 채우기
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken()); // x좌표 (색종이의 왼쪽 변과 도화지의 왼쪽 변 사이의 거리)
            int y = Integer.parseInt(st.nextToken()); // y좌표 (색종이의 아래쪽 변과 도화지의 아래쪽 변 사이의 거리)
            for (int j = x; j < x + 10; j++) {
                for (int k = y; k < y + 10; k++) {
                    paper[j][k] = 1; // 해당 위치를 1로 바꾸기
                }
            }
        }
        int total = 0; // 답
        for (int i = 0; i < 101; i++) { // 1로 채워진 면적을 모두 더하기
            for (int j = 0; j < 101; j++) {
                total = total + paper[i][j];
            }
        }
        System.out.println(total); // 답
    }
}
