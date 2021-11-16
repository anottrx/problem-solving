import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

    static int N, M;
    static boolean adjMatirx[][], visited[];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        adjMatirx = new boolean[N + 1][N + 1];
        visited = new boolean[N + 1];

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            adjMatirx[from][to] = adjMatirx[to][from] = true;
        }

        int answer = 0;
        for (int i = 1; i <= N; i++) {
            if (visited[i]) {
                continue;
            }
            answer++;
            dfs(i);
        }

        System.out.println(answer);
    }

    private static void dfs(int from) {
        visited[from] = true;
        for (int i = 1; i <= N; i++) {
            if (adjMatirx[from][i] && !visited[i] && i != from) {
                dfs(i);
            }
        }
    }
}
