// 출처: 백준저지 1388번 바닥 장식 https://www.acmicpc.net/problem/1388

import java.util.Scanner;

public class p1388 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 세로 크기 N
        int M = sc.nextInt(); // 가로 크기 M
        char[][] floor = new char[N][M];
        String inputStr;
        String[] splited;
        sc.nextLine();
        for (int i = 0; i < N; i++) { // 바닥 장식 모양
            inputStr = sc.nextLine();
            splited = inputStr.split("(?!^)");
            for (int j = 0; j < M; j++) {
                floor[i][j] = splited[j].charAt(0);
            }
        }

        int answer = 0; // 답 초기화

        for (int i = 0; i < N; i++) { // -
            for (int j = 0; j < M; j++) {
                if (j == 0 && floor[i][j] == '-') { // 처음에
                    answer++;
                } else if (j > 0 && floor[i][j - 1] != '-' && floor[i][j] == '-') { // | 다음
                    answer++;
                }
            }
        }

        for (int j = 0; j < M; j++) { // |
            for (int i = 0; i < N; i++) {
                if (i == 0 && floor[i][j] == '|') { // 처음에
                    answer++;
                } else if (i > 0 && floor[i - 1][j] != '|' && floor[i][j] == '|') { // - 다음
                    answer++;
                }
            }
        }

        System.out.println(answer); // 답
    }
}
