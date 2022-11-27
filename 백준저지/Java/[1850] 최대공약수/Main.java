// 백준저지 1850번 최대공약수 https://www.acmicpc.net/problem/1850

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long A = Long.parseLong(st.nextToken());
        long B = Long.parseLong(st.nextToken());
        long gcd = getGCD(Math.max(A, B), Math.min(A, B));
        for (long i = 0; i < gcd; i++) {
            bw.write("1"); // 시간 초과 막기 위함
        }
        bw.write("\n");
        bw.flush();
        bw.close();
    }

    private static long getGCD(long a, long b) {
        if (b <= 0) {
            return a;
        }
        return getGCD(b, a % b);
    }
}
