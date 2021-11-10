// 백준저지 6603번 로또 https://www.acmicpc.net/problem/6603

import java.io.*;
import java.util.*;

public class Main {

    static int K, input[], selected[];
    static StringBuilder sb;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        sb = new StringBuilder();

        while (true) {
            st = new StringTokenizer(br.readLine());
            K = Integer.parseInt(st.nextToken());
            if (K == 0) {
                break;
            } else {
                input = new int[K];
                selected = new int[6];
                for (int i = 0; i < K; i++) {
                    input[i] = Integer.parseInt(st.nextToken());
                }
                getLottoNum(0, 0);
                sb.append("\n");
            }
        }

        if (sb.length() > 1) {
            System.out.println(sb.substring(0, sb.length() - 2));
        } else {
            System.out.println();
        }
    }

    private static void getLottoNum(int cnt, int start) {
        if (cnt == 6) {
            for (int i = 0; i < 6; i++) {
                sb.append(selected[i] + " ");
            }
            sb.append("\n");
            return;
        }

        for (int i = start; i < K; i++) {
            selected[cnt] = input[i];
            getLottoNum(cnt + 1, i + 1);
        }
    }
}
