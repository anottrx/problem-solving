// 백준저지 7562번 나이트의 이동 https://www.acmicpc.net/problem/7562

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

    static int[][] d = { { -1, -2 }, { -2, -1 }, { -2, 1 }, { -1, 2 }, { 1, -2 }, { 2, -1 }, { 1, 2 }, { 2, 1 } };
    static int N, startX, startY, endX, endY;

    static class Position {
        int x, y;

        public Position(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        StringTokenizer st = null;
        Queue<Position> q;

        for (int tc = 0; tc < T; tc++) {
            N = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            startX = Integer.parseInt(st.nextToken());
            startY = Integer.parseInt(st.nextToken());
            st = new StringTokenizer(br.readLine());
            endX = Integer.parseInt(st.nextToken());
            endY = Integer.parseInt(st.nextToken());
            q = new LinkedList<>();
            boolean[][] vistied = new boolean[N][N];
            vistied[startX][startY] = true;
            q.offer(new Position(startX, startY));
            bw.write(getCount(q, vistied) + "\n");
        }
        bw.flush();
        bw.close();
    }

    private static int getCount(Queue<Position> q, boolean[][] vistied) {
        int cnt = 0;

        while (!q.isEmpty()) {
            int size = q.size();
            for (int j = 0; j < size; j++) {
                Position cur = q.poll();
                if (cur.x == endX && cur.y == endY) {
                    return cnt;
                }

                for (int i = 0; i < 8; i++) {
                    int dx = cur.x + d[i][0];
                    int dy = cur.y + d[i][1];
                    if (dx >= 0 && dx < N && dy >= 0 && dy < N && !vistied[dx][dy]) {
                        q.offer(new Position(dx, dy));
                        vistied[dx][dy] = true;
                    }
                }
            }
            cnt++;
        }

        return cnt;
    }
}
