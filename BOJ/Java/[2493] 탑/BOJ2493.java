// 출처: 백준저지 2493번 탑 https://www.acmicpc.net/problem/2493

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.Stack;
import java.util.StringTokenizer;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken()); // 탑의 수 (1 이상 500,000 이하)
        Stack<Integer> towers = new Stack<>(); // 탑 높이 모은 스택
        Stack<Integer> tNth = new Stack<>(); // 탑들의 번호 모은 스택
        int[] answer = new int[N + 1]; // 답
        Arrays.fill(answer, -1); // -1로 초기화

        StringBuilder sb = new StringBuilder();
        st = new StringTokenizer((br.readLine()), " ");
        int h = Integer.parseInt(st.nextToken()); // 탑 높이는 1 이상 100,000,000 이하
        towers.add(h); // 첫번째 탑
        tNth.add(1); // 1번째
        answer[1] = 0; // 첫번째 탑은 무조건 0개의 탑에 수신보낸다
        int max = h; // 스택에 있는 탑 중 가장 높은 탑의 높이
        int maxth = 1; // 가장 높은 탑에 해당하는 번호

        int h2 = -1;
        for (int i = 2; i <= N; i++) { // 첫번째는 했으니 두번째부터 N번쨰까지
            h = Integer.parseInt(st.nextToken()); // 이번 탑
            h2 = towers.peek(); // 직전 탑
            if (max < h) { // 이번의 탑이 제일 키가 큰 경우, 이전은 의미가 없어진다
                answer[i] = 0; // 다 끝난 뒤, 스택은 비어있어서 해당 탑이 수신보낼 탑이 없다
                towers.add(h);
                tNth.add(i);
                max = h;
                maxth = i;
            } else if (h2 > h) { // 직전 탑이 키가 더 큰 경우, 직전 탑이 수신한다
                towers.add(h); // 이번 탑 넣기
                tNth.add(i); // 이번 탑의 순서 넣기
                answer[i] = i - 1; // 직전 탑 번호
            } else if (h2 < h) { // 직전 탑보다 더 큰 경우
                if (answer[i - 1] != -1) {
                    towers.pop(); // 직전 탑 빼기
                    tNth.pop(); // 직전 탑 번호 빼기
                    while (true) { // 이번 탑은 max가 아니기 때문에 무조건 while문은 끝난다
                        int h4 = towers.peek(); // 스택에서 제일 최근 탑 높이
                        int h4th = tNth.peek(); // 해당 탑의 번호
                        if (h4 > h) { // 이번 탑보다 큰 탑(예: max)을 발견하면 번호를 구하고 끝낸다
                            answer[i] = h4th;
                            break;
                        } else {
                            towers.pop();
                            tNth.pop();
                        }
                    }
                    towers.add(h); // 이번 탑 넣기
                    tNth.add(i); // 이번 탑 번호 넣기
                }
            }
        }
        for (int i = 1; i <= N; i++) { // 답 출력
            sb.append(answer[i] + " ");
        }
        bw.write(sb.toString() + "\n");
        bw.flush();
        bw.close();
    }
}
