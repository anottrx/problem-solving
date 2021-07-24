// 출처: 백준저지 17219번 비밀번호 찾기 https://www.acmicpc.net/problem/17219

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.HashMap;

public class p17219 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String[] input = (br.readLine()).split(" ");
        int N = Integer.parseInt(input[0]); // 저장된 사이트 주소의 수 N(1 ≤ N ≤ 100,000)
        int M = Integer.parseInt(input[1]); // 비밀번호를 찾으려는 사이트 주소의 수 M(1 ≤ M ≤ 100,000)
        HashMap<String, String> idpw = new HashMap<String, String>(); // 주소와 비밀번호

        for (int i = 0; i < N; i++) { // 주소와 비밀번호 입력 받아서 idpw에 저장하기
            input = (br.readLine()).split(" ");
            idpw.put(input[0], input[1]);
        }
        String[] find = new String[M]; // 답
        for (int i = 0; i < M; i++) { // 비밀번호를 찾고자 하는 주소를 입력받아 찾고 답에 저장하기
            find[i] = idpw.get(br.readLine());
        }
        for (int i = 0; i < M; i++) {
            bw.write(find[i] + "\n"); // 답 출력
        }
        bw.flush();
        bw.close();
    }
}
