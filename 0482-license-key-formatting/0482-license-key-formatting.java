class Solution {
    public String licenseKeyFormatting(String s, int k) {
        StringBuilder sb = new StringBuilder();

        int count = k ;
        int index = s.length() -1; 
        while(index >= 0) {
            char c = s.charAt(index--);
            if(c == '-') continue; 

            if(count != 0){ //还在这个组里
                sb.append(c);
                count--;
            }else{
                sb.append('-');
                sb.append(c);
                count = k-1;
            }
        }
        return sb.reverse().toString().toUpperCase();
    }
}