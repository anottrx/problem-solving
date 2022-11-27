// 백준저지 11399번 ATM https://www.acmicpc.net/problem/11399

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] money = new int[N];
        for (int i = 0; i < N; i++) {
            money[i] = sc.nextInt();
        }
        Arrays.sort(money);
        int sum = 0;
        for (int i = 0; i < N; i++) {
            sum += money[i] * (N - i);
        }
        System.out.println(sum);
    }
}
