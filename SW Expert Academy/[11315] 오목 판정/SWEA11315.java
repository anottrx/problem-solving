// 출처: SW Expert Academy 11315번 오목 판정

import java.util.Scanner;

public class SWEA11315 {

	static int[][] d = { { 0, 1 }, { 1, -1 }, { 1, 0 }, { 1, 1 } }; // 오른쪽, 아래왼쪽, 아래, 아래오른쪽
	static char[][] map;
	static int N;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = Integer.parseInt(sc.nextLine());

		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(sc.nextLine());
			String answer = "NO";
			map = new char[N][N];
			for (int i = 0; i < N; i++) {
				map[i] = (sc.nextLine()).toCharArray();
			}

			gaming: for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					if (map[i][j] == 'o') { // 돌 발견
						for (int dd = 0; dd < 4; dd++) {
							int cnt = counting(i, j, dd);
							if (cnt == 5) { // 돌이 5개라면 게임 끝내기
								answer = "YES";
								break gaming;
							}
						}
					}
				}
			}
			System.out.println("#" + tc + " " + answer);
		}
	}

	private static int counting(int i, int j, int dd) {
		int cnt = 1; // 횟수는 1로 초기화. 이미 돌을 발견했기 때문
		int dx = i, dy = j;
		for (int g = 0; g < 4; g++) { // 총 4번 반복
			dx = dx + d[dd][0];
			dy = dy + d[dd][1];
			if (dx >= 0 && dx < N && dy >= 0 && dy < N && map[dx][dy] == 'o') {
				// 돌이 오목판 안에 있고, 돌이 존재한다면
				cnt++;
			} else {
				break;
			}
		}
		return cnt;
	}
}
