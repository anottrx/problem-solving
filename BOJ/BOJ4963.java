import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ4963 {
    static int W, H, map[][];
    static boolean[][] visited;
    static int[][] d = { { -1, 0 }, { 0, -1 }, { 1, 0 }, { 0, 1 }, { 1, 1 }, { -1, 1 }, { 1, -1 }, { -1, -1 } };

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        while (true) {
            st = new StringTokenizer(br.readLine());
            W = Integer.parseInt(st.nextToken());
            H = Integer.parseInt(st.nextToken());
            if (W == 0 && H == 0) {
                break;
            }
            int cnt = 0;
            map = new int[H][W];
            visited = new boolean[H][W];
            for (int i = 0; i < H; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j = 0; j < W; j++) {
                    map[i][j] = Integer.parseInt(st.nextToken());
                }
            }
            for (int i = 0; i < H; i++) {
                for (int j = 0; j < W; j++) {
                    if (map[i][j] == 1 && !visited[i][j]) {
                        cnt++;
                        visited[i][j] = true;
                        connect(i, j);
                    }
                }
            }
            sb.append(cnt + "\n");
        }
        if (sb.length() > 0) {
            System.out.println(sb.substring(0, sb.length() - 1));
        }
    }

    private static void connect(int x, int y) {
        for (int i = 0; i < 8; i++) {
            int dx = x + d[i][0];
            int dy = y + d[i][1];
            if (dx >= 0 && dx < H && dy >= 0 && dy < W && map[dx][dy] == 1 && !visited[dx][dy]) {
                visited[dx][dy] = true;
                connect(dx, dy);
            }
        }
    }
}
