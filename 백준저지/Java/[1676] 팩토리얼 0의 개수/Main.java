// 백준저지 1676번 팩토리얼 0의 개수 https://www.acmicpc.net/problem/1676

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        sc.close();
        int count = 0;
        for (int num = 1; num <= N; num++) {
            for (int j = 5; j <= N; j = j * 5) {
                if (num % j == 0) {
                    count++;
                }
            }
        }
        System.out.println(count);
    }
}
