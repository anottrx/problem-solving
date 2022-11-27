/*
  출처: 1475번 방 번호 https://www.acmicpc.net/problem/1388
*/

import java.util.Scanner;

public class p1475 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String roomNumber = sc.nextLine(); // 다솜이의 방 번호 N. N은 1,000,000보다 작거나 같은 자연수 또는 0이다.
        String[] roomN = roomNumber.split("(?!^)");
        int[] checkNum = new int[9]; // 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다.

        int max = 0; // 필요한 세트의 개수의 최솟값
        for (int i = 0; i < 9; i++) { // 세트의 각 숫자의 개수를 0으로 초기화
            checkNum[i] = 0;
        }
        for (int i = 0; i < roomN.length; i++) {
            if (roomN[i].equals("9")) { // 6과 9는 뒤집어서 이용 가능하니 6에 모오기
                checkNum[6]++;
            } else {
                int n = Integer.parseInt(roomN[i]);
                checkNum[n]++;
            }
        }
        if (checkNum[6] % 2 == 1) { // 6과 9 계산 정리
            checkNum[6] = checkNum[6] / 2 + 1;
        } else {
            checkNum[6] = checkNum[6] / 2;
        }

        for (int i = 0; i < 9; i++) { // 최소값 비교
            if (max < checkNum[i]) {
                max = checkNum[i];
            }
        }
        System.out.print(max); // 답 출력

    }
}
