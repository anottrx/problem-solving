// 백준저지 1003번 피보나치 함수 https://www.acmicpc.net/problem/1003

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
    static long[] called;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        int[] call0 = new int[41];
        int[] call1 = new int[41];
        call0[0] = 1;
        call0[1] = 0;
        call1[0] = 0;
        call1[1] = 1;

        for (int i = 2; i <= 40; i++) {
            call0[i] = call0[i - 1] + call0[i - 2];
            call1[i] = call1[i - 1] + call1[i - 2];
        }

        for (int tc = 0; tc < N; tc++) {
            int num = Integer.parseInt(br.readLine());
            bw.write(call0[num] + " " + call1[num] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
