// 출처: 백준저지 1244번 스위치 켜고 끄기 https://www.acmicpc.net/problem/1244

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.io.IOException;

public class BOJ1244 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine()); // 스위치 개수 (100 이하인 양의 정수)
        String input = br.readLine();

        String[] strr = (input).split("(?!^)");
        int[] light = new int[N];
        int c = 0;
        for (int i = 0; i < strr.length; i++) { // 각 스위치의 상태 입력
            if (strr[i].equals("0") || strr[i].equals("1")) {
                light[c] = Integer.parseInt((strr[i]).trim());
                c++;
            }
        }

        int stuN = Integer.parseInt(br.readLine()); // 학생수 (100 이하인 양의 정수)
        int[][] change = new int[stuN][2];
        for (int i = 0; i < stuN; i++) { // 한 학생의 성별, 학생이 받은 수 입력
            String[] str2 = (br.readLine()).split(" ");
            change[i][0] = Integer.parseInt(str2[0]);
            change[i][1] = Integer.parseInt(str2[1]);
        }

        for (int i = 0; i < stuN; i++) { // 학생 수만큼 반복
            if (change[i][0] == 1) { // 남학생은 스위치 번호가 자기가 받은 수의 배수이면, 그 스위치의 상태를 바꾼다.
                int nth = change[i][1]; // 스위치 번호
                int nthChan = nth - 1; // 스위치 번호의 배수를 위함. 시작이 첫번째이지만 0
                while (nthChan < light.length) { // 스위치 길이 이내에서 실행
                    if (light[nthChan] == 0) {
                        light[nthChan] = 1;
                    } else {
                        light[nthChan] = 0;
                    }
                    nthChan = nth + nthChan;
                }
            } else { // 여학생인 경우
                int nth = change[i][1] - 1; // 스위치 번호. 0부터 시작하기 때문에 1을 뺀다
                if ((nth > 0) && (nth < (light.length - 1))) {
                    if (light[nth - 1] == light[nth + 1]) { // 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭인 경우
                        int count = 1; // 스위치 중심으로 대칭인 스위치들의 횟수
                        changing: while (true) { // 가장 많은 스위치를 포함하는 구간을 찾아 스위치의 상태를 모두 바꾼다.(개수는 홀수)
                            if ((nth - count) >= 0 && (nth + count) < light.length) {
                                if (light[nth - count] == light[nth + count]) {
                                    if (light[nth - count] == 0) {
                                        light[nth - count] = 1;
                                        light[nth + count] = 1;
                                    } else {
                                        light[nth - count] = 0;
                                        light[nth + count] = 0;
                                    }
                                    count++;
                                } else { // 스위치의 좌우 상태가 다를 경우 끝낸다
                                    break changing;
                                }
                            } else { // 스위치 길이를 벗어날 경우 끝낸다
                                break changing;
                            }
                        }
                    }
                }
                if (light[nth] == 0) { // 자신이 받은 수의 왼쪽과 오른쪽이 다를 경우 해당 스위치만 바꾼다. 그렇지 않은 경우라도 바꿔야한다
                    light[nth] = 1;
                } else {
                    light[nth] = 0;
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < N; i++) {
            if (i != 0 && i % 20 == 19) { // 한 줄에 20개씩 출력
                sb.append(light[i] + " \n");
            } else {
                sb.append(light[i] + " ");
            }

        }
        bw.write(sb + "\n"); // 답 출력
        bw.flush();
        bw.close();
    }
}
