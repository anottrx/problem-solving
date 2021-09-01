// 출처: 백준저지 10989번 수 정렬하기 3 https://www.acmicpc.net/problem/10989

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] numArr = new int[N];
        for (int i = 0; i < N; i++) {
            numArr[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(numArr);
        for (int i = 0; i < N; i++) {
            bw.write(numArr[i] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
