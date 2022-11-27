// 출처: 백준저지 2615번 오목 https://www.acmicpc.net/problem/2615

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class BOJ2615 {
    static int[][] bg = new int[19][19]; // 오목판

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        boolean isFinished = false; // 게임에서 승리자가 결정되었는지 확인. false로 초기화
        int[][] d = { { -1, -1 }, { -1, 0 }, { -1, 1 }, // 위에서 왼쪽, 가운데, 오른쪽
                { 0, -1 }, { 0, 1 }, // 가운데에서 왼쪽, 오른쪽
                { 1, -1 }, { 1, 0 }, { 1, 1 } }; // 아래에서 왼쪽, 가운데, 오른쪽
        for (int i = 0; i < 19; i++) { // 오목판 입력 받기
            String[] inputArr = (br.readLine()).split(" ");
            for (int k = 0; k < 19; k++) {
                bg[i][k] = Integer.parseInt(inputArr[k]);
            }
        }

        int count = 0; // 같은 색깔의 돌 개수 세기 위함
        int lx = 0; // 가장 왼쪽에 있는 바둑알의 가로줄 번호
        int ly = 0; // 가장 왼쪽에 있는 바둑알의 세로줄 번호
        int[] check = { count, lx, ly }; // check 배열에 count, lx, ly 넣기
        game: for (int i = 0; i < 19; i++) {
            for (int j = 0; j < 19; j++) {
                if (bg[i][j] != 0) { // 바둑을 발견하면 검사를 시작
                    for (int k = 4; k < 8; k++) { // 오른쪽과 아래만 확인하면 된다. 위쪽과 왼쪽은 이미 확인하면서 지나왔기 때문
                        count = 1; // 1로 초기화
                        lx = i; // 현재 바둑돌이 가장 왼쪽에 있다고 우선 초기화한다
                        ly = j;
                        check = new BOJ2615().checkWin(i, j, d[k][0], d[k][1], bg[i][j], count, lx, ly);

                        count = check[0];
                        lx = check[1];
                        ly = check[2];
                        if (count == 5) { // 5개의 바둑돌이 연속되어 있을 경우
                            int kd = 7 - k; // 혹시 이전까지 포함해서 6개의 돌이 있을 수도 있기 때문에 확인해야한다
                            int kx = i + d[kd][0];
                            int ky = j + d[kd][1];
                            if ((kx < 0 || kx >= 19 || ky < 0 || ky >= 19) || (bg[kx][ky] != (bg[lx][ly] * -1))) {
                                // 이전의 돌을 확인했을 때, 오목판 밖으로 나가거나 해당 돌과 같은 색이 존재하지 않을 때 게임은 승부가 결정되면서 끝난다
                                isFinished = true;
                                bw.write(bg[i][j] + "\n"); // 검은색이 이겼을 경우에는 1을, 흰색이 이겼을 경우에는 2 출력
                                bw.write((lx + 1) + " " + (ly + 1) + "\n");
                                // 가장 왼쪽에 있는 바둑알(세로로 놓인 경우, 가장 위에 있는 것)의 가로줄 번호와, 세로줄 번호 출력
                                break game; // 게임 끝내기
                            }
                            if (bg[kx][ky] == (bg[i][j] * -1)) { // 여섯 알 이상이 연속적으로 놓인 경우에는 이긴 것이 아니다
                            }
                        } else if (count == 6) { // 6개의 바둑돌이 연속되어 있을 경우 -1을 곱해 표시한다
                            bg[i][j] = bg[i][j] * -1;
                        }
                    }

                }
            }
        }

        if (isFinished == false) { // 승부가 결정되지 않았을 경우에는 0을 출력
            bw.write("0 \n");
        }
        bw.flush();
        bw.close();
    }

    int[] checkWin(int px, int py, int dx, int dy, int color, int count, int lx, int ly) {
        // 현재 돌의 위치(행과 열), 돌의 이동 방향(행과 열), 돌의 색깔, 현재 몇번째 돌인지 세는용, 가장 왼쪽에 있는 돌의 위치(행과 열)
        int px1 = px + dx; // 위치 이동
        int py1 = py + dy;
        int[] check = { count, lx, ly };
        if (count == 5) { // 5개의 돌이 연속일 때
            if ((px1 < 0 || px1 >= 19 || py1 < 0 || py1 >= 19) || bg[px1][py1] != color) {
                // 위치를 이동했을 때 돌이 오목판 밖으로 나가거나 색상이 다른 경우, 5개만 연속되었기 때문에 count 5를 리턴
                return check;
            } else { // 그렇지 않은 경우, 6개의 돌이 연속되었기 때문에 count 6을 리턴
                check[0]++;
                return check;
            }
        } else { // count가 1,2,3,4일 경우는 진행
            if (py1 < ly) { // 한칸 이동한 돌의 위치가 현재 가장 왼쪽에 있는 돌보다 더 왼쪽일 경우 lx,ly를 바꾼다
                check[1] = px1;
                check[2] = py1;
            }
            if ((px1 < 0 || px1 >= 19 || py1 < 0 || py1 >= 19) || bg[px1][py1] != color) {
                // 위치를 이동했을 때 돌이 오목판 밖으로 나가거나 색상이 다른 경우, 의미가 없기 때문에 리턴
                check[0] = -1;
                return check;
            } else { // 그렇지 않은 경우 계속 진행
                check[0]++;
                return checkWin(px1, py1, dx, dy, color, check[0], check[1], check[2]);
            }
        }
    }
}
