// 출처: 백준저지 2309번 일곱 난쟁이 https://www.acmicpc.net/problem/2309

import java.util.Arrays;
import java.util.Scanner;

public class BOJ2309 {
    static int[] dwarf = new int[9]; // 입력받을 아홉 난쟁이
    static int[] seven = new int[7]; // 임시로 저장할 일곱 난쟁이
    static int[] answer = new int[7]; // 답이 될 일곱 난쟁이

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < 9; i++) {
            dwarf[i] = sc.nextInt();
        }
        Arrays.sort(dwarf); // 입력받은 아홉 난쟁이 정렬
        combination(0, 0, 0); // 조합

        for (int a : answer) { // 답 출력
            System.out.println(a);
        }

    }

    private static void combination(int cnt, int start, int sum) {
        if (cnt == 7) {
            if (sum == 100) { // 합이 100일 때 답에 해당 일곱 난쟁이를 저장
                for (int i = 0; i < 7; i++) {
                    answer[i] = seven[i];
                }
            }
            return;
        }

        for (int i = start; i < 9; i++) {
            seven[cnt] = dwarf[i];
            combination(cnt + 1, i + 1, sum + dwarf[i]);
        }
    }
}
