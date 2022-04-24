// 출처: 백준저지 1764번 듣보잡 https://www.acmicpc.net/problem/1764

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.StringTokenizer;
import java.io.IOException;

public class BOJ1764 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int N = Integer.parseInt(st.nextToken()); // 듣도 못한 사람의 수 N
        int M = Integer.parseInt(st.nextToken()); // 보도 못한 사람의 수 M
        HashSet<String> hsN = new HashSet<>(); // 듣도 못한 사람을 저장
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            hsN.add(st.nextToken());
        }
        ArrayList<String> answer = new ArrayList<>(); // 듣보 보도 못한 사람. 답
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            String strM = st.nextToken(); // 보도 못한 사람이 듣도 못한 사람일 경우 답에 저장
            if (hsN.contains(strM)) {
                answer.add(strM);
            }
        }
        Collections.sort(answer); // 사전 순으로 정렬
        bw.write(answer.size() + "\n"); // 듣보잡의 수 출력
        for (int i = 0; i < answer.size(); i++) { // 듣보잡의 명단 출력
            bw.write(answer.get(i) + "\n");
        }
        bw.flush();
        bw.close();
    }
}
