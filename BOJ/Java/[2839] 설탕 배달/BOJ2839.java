// 출처: 백준저지 2839번 설탕 배달 https://www.acmicpc.net/problem/2839

import java.util.Scanner;

public class BOJ2839 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int answer = 0;

		while (true) {
			if (N % 5 == 0) {
				answer = answer + N / 5;
				break;
			} else {
				N = N - 3;
				answer++;
			}
			if (N < 0) {
				answer = -1;
				break;
			}
		}

		System.out.println(answer);
	}
}
