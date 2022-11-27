// 출처: 백준저지 10989번 수 정렬하기 3 https://www.acmicpc.net/problem/10989

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] numArr = new int[10001];
        for (int i = 0; i < N; i++) {
            int n = Integer.parseInt(br.readLine());
            numArr[n]++;
        }
        for (int i = 1; i < 10001; i++) {
            for (int j = 0; j < numArr[i]; j++) {
                bw.write(i + "\n");
            }
        }
        bw.flush();
        bw.close();
    }
}
