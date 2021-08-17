import java.util.HashMap;
class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        HashMap<String,Integer> cloth = new HashMap<>();
        for(int i=0; i<clothes.length; i++) {
            cloth.put(clothes[i][1], cloth.getOrDefault(clothes[i][1],0)+1);
            // if(cloth.containsKey(clothes[i][1])) {
            //     cloth.put(clothes[i][1], cloth.get(clothes[i][1])+1);
            // } else {
            //     cloth.put(clothes[i][1], 2);
            // }
        }
        for(int c: cloth.values()) {
            answer = answer * (c+1);
        }
        answer--;
        
        return answer;
    }
}
