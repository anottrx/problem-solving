// 백준저지 10819번 차이를 최대로 https://www.acmicpc.net/problem/10819

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

    static int N, max, input[], num[];
    static boolean[] selected;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        input = new int[N];
        selected = new boolean[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            input[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(input);

        num = new int[N];
        getDiff(0);

        System.out.println(max);

    }

    private static void getDiff(int cnt) {
        if (cnt == N) {
            int sum = 0;
            for (int i = 0; i < N - 1; i++) {
                sum += Math.abs(num[i] - num[i + 1]);
            }
            max = Math.max(max, sum);
        }

        for (int i = 0; i < N; i++) {
            if (!selected[i]) {
                selected[i] = true;
                num[cnt] = input[i];
                getDiff(cnt + 1);
                selected[i] = false;
            }
        }
    }
}
