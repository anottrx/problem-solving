// 출처: 백준저지 14912번 숫자 빈도수 https://www.acmicpc.net/problem/14912

import java.util.Scanner;

public class p14912 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 자연수 n (1 ≤ n ≤ 100,000)
        int d = sc.nextInt(); // 한 자리 숫자 d(0~9)
        int cnt = 0; // 답 초기화

        for (int i = 1; i <= n; i++) {
            String num = String.valueOf(i);
            String[] splited = num.split("(?!^)");
            for (int j = 0; j < splited.length; j++) {
                if (Integer.parseInt(splited[j]) == d) {
                    cnt++;
                }
            }
        }

        System.out.println(cnt); // 답 출력
    }
}
