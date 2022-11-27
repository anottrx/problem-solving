// 백준저지 6588번 골드바흐의 추측 https://www.acmicpc.net/problem/6588

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BOJ6588 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n;

        // 시작할 때 미리 에라토스테네스의 체 해놓기
        boolean[] isNotPrime = new boolean[1000001];
        for (int i = 2; i <= Math.sqrt(1000000); i++) {
            if (!isNotPrime[i]) {
                for (int j = 2, k = i * j; k <= 1000000; j++, k = i * j) {
                    isNotPrime[k] = true;
                }
            }
        }

        while (true) {
            n = Integer.parseInt(br.readLine());
            if (n == 0) {
                break;
            }

            boolean getGoldbachs = false;
            for (int i = 2; i <= Math.sqrt(1000000); i++) {
                if (!isNotPrime[i] && !isNotPrime[n - i]) { // 답 찾으면 끝내기
                    getGoldbachs = true;
                    bw.write(n + " = " + i + " + " + String.valueOf(n - i) + "\n");
                    break;
                }
            }
            if (!getGoldbachs) {
                bw.write("Goldbach's conjecture is wrong.\n");
            }
        }
        bw.flush();
        bw.close();
    }

}
