// 백준저지 16174번 점프왕 쩰리 (Large) https://www.acmicpc.net/problem/16174

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

    static int[][] d = { { 1, 0 }, { 0, 1 } }; // ‘쩰리’가 이동 가능한 방향은 오른쪽과 아래

    static private class Position {
        int x, y, cnt;

        public Position(int x, int y, int c) {
            this.x = x;
            this.y = y;
            this.cnt = c;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st;
        int[][] map = new int[N][N];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        String answer = "Hing";
        Queue<Position> q = new LinkedList<>();
        boolean[][] visited = new boolean[N][N];
        q.offer(new Position(0, 0, map[0][0]));
        visited[0][0] = true;
        move: while (!q.isEmpty()) {
            Position cur = q.poll();
            for (int i = 0; i < 2; i++) {
                int dx = cur.x + d[i][0] * cur.cnt;
                int dy = cur.y + d[i][1] * cur.cnt;
                if (dx >= 0 && dx < N && dy >= 0 && dy < N && !visited[dx][dy]) {
                    if (dx == N - 1 && dy == N - 1) {
                        answer = "HaruHaru";
                        break move;
                    } else {
                        q.offer(new Position(dx, dy, map[dx][dy]));
                        visited[dx][dy] = true;
                    }
                }
            }
        }

        System.out.println(answer);
    }
}
