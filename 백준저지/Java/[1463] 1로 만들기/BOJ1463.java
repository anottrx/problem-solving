// 출처: 백준저지 1463번 1로 만들기 https://www.acmicpc.net/problem/1463

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BOJ1463 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int N = Integer.parseInt(br.readLine());

		int[] num = new int[N + 4]; // 인덱스가 3일 때까지 미리 하기
		num[1] = 0;
		num[2] = 1;
		num[3] = 1;

		if (N >= 4) { // N이 3까지는 구해놨으니 N이 4 이상일 때만 진행
			for (int i = 4; i <= N; i++) {
				num[i] = num[i - 1] + 1; // 우선 직전값에 1 더한 것이 최소라고 초기화
				if (i % 3 == 0) { // 해당 수가 3으로 나뉘어진다면
					num[i] = Math.min(num[i], num[i / 3] + 1);
					// 초기화된 값과 (3으로 나눈 값일 때 값 + 1(3으로 1번 나누었으니))과 비교해서 최소값 선택
				}
				if (i % 2 == 0) { // 해당 수가 2로 나뉘어진다면
					num[i] = Math.min(num[i], num[i / 2] + 1);
					// (초기화된 값 또는 3으로 나눠 얻은 최소값)과 (2으로 나눈 값일 때 값 + 1(2으로 1번 나누었으니))과 비교해서 최소값 선택
				}
				// num[i] : i를 1로 만드는 연산 횟수의 최소값이 구해진 상태
			}
		}
		bw.write(num[N] + "\n");
		bw.flush();
		bw.close();
	}
}
