// 출처: 백준저지 1620번 나는야 포켓몬 마스터 이다솜 https://www.acmicpc.net/problem/1620

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.HashMap;

class p1620 {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] input = (br.readLine()).split(" ");
        int n = Integer.parseInt(input[0]); // 도감에 수록되어 있는 포켓몬의 개수 N
        int m = Integer.parseInt(input[1]); // 내가 맞춰야 하는 문제의 개수 M

        HashMap<String, String> pm = new HashMap<String, String>(); // 포켓몬, 번호
        HashMap<String, String> pm2 = new HashMap<String, String>(); // 번호, 포켓몬

        String[] quest = new String[m]; // 문제 배열

        for (int i = 1; i <= n; i++) { // 포켓몬을 입력받는다
            String inputStr = br.readLine();
            pm.put(inputStr, String.valueOf(i)); // 포켓몬, 번호
            pm2.put(String.valueOf(i), inputStr); // 번호, 포켓몬
        }
        for (int i = 0; i < m; i++) { // 문제를 입력받는다
            quest[i] = br.readLine();
        }

        for (int i = 0; i < m; i++) {
            String result = pm.get(quest[i]); // 포켓몬을 입력받았다고 가정하고 답을 찾는다
            if (result == null) { // 그런데 그 결과가 null이라면 번호를 입력받은 경우다
                result = pm2.get(quest[i]); // 번호를 압력받았다고 가정하고 찾는다
            }
            bw.write(result + "\n"); // 답 출력
        }
        bw.flush();
        bw.close();
    }

}
