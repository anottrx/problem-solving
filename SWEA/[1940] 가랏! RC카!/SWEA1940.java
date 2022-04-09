// 출처: SW Expert Academy 1940번 가랏! RC카!

import java.util.Scanner;
import java.io.FileInputStream;

class SWEA1940 {
    public static void main(String args[]) throws Exception {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int test_case = 1; test_case <= T; test_case++) {
            int N = sc.nextInt(); // Command 의 수 (2 ≤ N ≤ 30)
            int state = sc.nextInt(); // 첫번째 상태. 0:현재 속도 유지, 1:가속, 2:감속
            int speed = 0; // 첫번째 속도
            if (state == 1) {
                speed = sc.nextInt();
            } else if (state == 2) { // 시작부터 감소라면 속도는 0이다
                speed = sc.nextInt();
                speed = 0;
            }
            int total = speed; // 답. N 초 동안 이동한 거리
            for (int i = 1; i < N; i++) { // 두번째부터 N번째까지
                state = sc.nextInt(); // 상태
                if (state == 0) { // 현재 속도 유지라면 이전 속도를 더한다
                } else if (state == 1) { // 가속이라면 속도는 이전+현재
                    int s = sc.nextInt();
                    speed = s + speed;
                } else if (state == 2) { // 감속이라면 속도는 이전-현재
                    int s = sc.nextInt();
                    speed = speed - s;
                    if (speed <= 0) { // 현재 속도보다 감속할 속도가 더 클 경우, 속도는 0 m/s
                        speed = 0;
                    }
                }
                total = total + speed;
            }
            System.out.println("#" + test_case + " " + total); // 답 출력
        }
    }
}
