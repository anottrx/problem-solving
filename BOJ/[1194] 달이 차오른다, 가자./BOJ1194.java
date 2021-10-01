// 출처: 백준저지 1194번 달이 차오른다, 가자. https://www.acmicpc.net/problem/1194

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class BOJ1194 {
	static int N, M;
	static char[][] map;
	static int[][] d = { { -1, 0 }, { 0, -1 }, { 1, 0 }, { 0, 1 } };
	static Queue<Position> q;

	static class Position {
		int x, y, key, cnt;

		public Position(int x, int y, int key, int cnt) {
			this.x = x;
			this.y = y;
			this.key = key;
			this.cnt = cnt;
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		map = new char[N][M];
		q = new LinkedList<>();

		for (int i = 0; i < N; i++) {
			String str = br.readLine();
			for (int j = 0; j < M; j++) {
				map[i][j] = str.charAt(j);
				if (map[i][j] == '0') { // 시작 위치 저장
					q.add(new Position(i, j, 0, 0)); // 시작 위치 큐에 넣기
				}
			}
		}

		findExit();
	}

	private static void findExit() {
		boolean[][][] visited = new boolean[64][N][M];

		while (!q.isEmpty()) {
			Position cur = q.poll();

			if (map[cur.x][cur.y] == '1') { // 출구 찾으면 끝
				System.out.println(cur.cnt);
				return;
			}

			visited[cur.key][cur.x][cur.y] = true;
			for (int i = 0; i < 4; i++) {
				int dx = cur.x + d[i][0];
				int dy = cur.y + d[i][1];
				int dkey = cur.key;

				if (!isInMap(dx, dy) || visited[dkey][dx][dy] || map[dx][dy] == '#') {
					continue;
				}
				if (map[dx][dy] >= 'A' && map[dx][dy] <= 'F') {
					int tkey = dkey & (1 << (map[dx][dy] - 'A'));
					if (tkey <= 0) {
						continue;
					}
				} else if (map[dx][dy] >= 'a' && map[dx][dy] <= 'f') {
					dkey = dkey | (1 << (map[dx][dy] - 'a'));
				}
				visited[dkey][dx][dy] = true;
				q.add(new Position(dx, dy, dkey, (cur.cnt + 1)));
			}
		}
		System.out.println(-1);
	}

	private static boolean isInMap(int x, int y) {
		if (x >= 0 && x < N && y >= 0 && y < M) {
			return true;
		}
		return false;
	}
}
