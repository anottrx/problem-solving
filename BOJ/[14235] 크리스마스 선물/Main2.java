// 백준저지 14235번 크리스마스 선물 https://www.acmicpc.net/problem/14235

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // PriorityQueue Reverse Order
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            if (a == 0) { // 아이들에게 준 선물의 가치를 출력
                if (pq.isEmpty()) { // 줄 선물이 없다면 -1을 출력
                    sb.append("-1\n");
                } else {
                    int n = pq.poll();
                    sb.append(n + "\n");
                }
            } else {
                for (int j = 0; j < a; j++) {
                    int n = Integer.parseInt(st.nextToken());
                    pq.offer(n);
                }
            }
        }
        System.out.println(sb.substring(0, sb.length() - 1));
    }
}
