// 출처: 백준저지 15656번 N과 M (7) https://www.acmicpc.net/problem/15656

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ15656 {
    static int N, M;
    static int[] input, nums;
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        input = new int[N];
        nums = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            input[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(input);
        getNum(0);

        bw.flush();
        bw.close();
    }

    private static void getNum(int cnt) throws IOException {
        if (cnt == M) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < M; i++) {
                sb.append(nums[i] + " ");
            }
            bw.write(sb + "\n");
            return;
        }

        for (int i = 0; i < N; i++) {
            nums[cnt] = input[i];
            getNum(cnt + 1);
        }
    }
}
