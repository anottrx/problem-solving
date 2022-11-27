// 출처: 백준저지 9095번 1, 2, 3 더하기 https://www.acmicpc.net/problem/9095

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BOJ9095 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int T = Integer.parseInt(br.readLine());

		int[] num = new int[12];
		num[1] = 1;
		num[2] = 2;
		num[3] = 4;

		for (int tc = 0; tc < T; tc++) {
			int N = Integer.parseInt(br.readLine());
			if (N >= 1) {
				for (int i = 4; i <= N; i++) {
					num[i] = num[i - 1] + num[i - 2] + num[i - 3];
				}
			}
			bw.write(num[N] + "\n");
		}

		bw.flush();
		bw.close();
	}
}
