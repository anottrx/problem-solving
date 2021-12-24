// 백준저지 2331번 반복수열 https://www.acmicpc.net/problem/2331

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int A = Integer.parseInt(st.nextToken());
        int P = Integer.parseInt(st.nextToken());
        int[] cnt = new int[1000000];
        int curNum = A;
        cnt[curNum]++;
        while (true) {
            String curNumStr = String.valueOf(curNum);
            char[] curNumChar = curNumStr.toCharArray();
            int curNumDigit = curNumChar.length;
            int curSum = 0;
            for (int i = 0; i < curNumDigit; i++) {
                int curNumTemp = curNumChar[i] - '0';
                curNumTemp = (int) Math.pow(curNumTemp, P);
                curSum += curNumTemp;
            }
            cnt[curSum]++;
            if (cnt[curSum] == 3) {
                break;
            }
            curNum = curSum;
        }
        int answer = 0;
        for (int i = 0; i < 1000000; i++) {
            if (cnt[i] == 1) {
                answer++;
            }
        }
        System.out.println(answer);
    }
}
