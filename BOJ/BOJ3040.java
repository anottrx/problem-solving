// 출처: 백준저지 3040번 백설 공주와 일곱 난쟁이 https://www.acmicpc.net/problem/3040

import java.util.Scanner;

public class BOJ3040 {
	static int[] dwarf = new int[9]; // 아홉 난쟁이
	static int[] selected = new int[7]; // 합이 100이 되도록 구할 일곱 난쟁이

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for (int i = 0; i < 9; i++) { // 난쟁이 입력 받기
			dwarf[i] = sc.nextInt();
		}
		combination(0, 0);

	}

	private static void combination(int cnt, int start) {
		if (cnt == 7) {
			int sum = 0; // 합 계산을 위함. 0으로 초기화
			for (int i = 0; i < 7; i++) { // 고른 일곱 난쟁이의 합 구하기
				sum = sum + selected[i];
			}
			if (sum == 100) { // 합이 100이 될 경우가 답
				for (int i : selected) { // selected 안에 저장되어 있기 때문에 꺼내 출력
					System.out.println(i);
				}
				return;
			}
			return;
		}
		for (int i = start; i < 9; i++) {
			selected[cnt] = dwarf[i];
			combination(cnt + 1, i + 1);
		}
	}
}
