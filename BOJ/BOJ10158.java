// 출처: 백준저지 10158번 개미 https://www.acmicpc.net/problem/10158 
// 시간 초과

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.StringTokenizer;

public class BOJ10158 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int w = Integer.parseInt(st.nextToken()); // w와 h는 자연수. (2 ≤ w,h ≤ 40,000)
        int h = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        int x = Integer.parseInt(st.nextToken()); // 개미의 초기 위치 p와 q도 자연수. (0 < p < w)
        int y = Integer.parseInt(st.nextToken()); // (0 < q < h)
        int t = Integer.parseInt(br.readLine()); // 계산할 시간 (1 ≤ t ≤ 200,000,000)

        x = (x + t) % (w * 2);
        y = (y + t) % (h * 2);
        if (x >= w) {
            bw.write((w * 2) - x + " ");
        } else {
            bw.write(x + " ");
        }
        if (y >= h) {
            bw.write(((h * 2) - y) + "\n");
        } else {
            bw.write(y + "\n");
        }
        bw.flush();
        bw.close();
    }
}
