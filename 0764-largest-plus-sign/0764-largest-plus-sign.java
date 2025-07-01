//2025.June.30 Codesignal xAI Software Engineering Specialist Assessment 

class Solution {
public int orderOfLargestPlusSign(int n, int[][] mines) {
        //初始化需要的矩阵，所有格子填充为1
        int[][] g = new int[n][n];
        for(int i =0; i< n; i++){
            Arrays.fill(g[i],1);
        }
        //根据mines，标记为0的格子
        for(int[] pos:mines){
            g[pos[0]][pos[1]] = 0;
        }
        //记录四个方向预处理的结果
        int[][] left = new int[n][n];
        int[][] right = new int[n][n];
        int[][] up = new int[n][n];
        int[][] down = new int[n][n];
        //预处理怎么做
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                //如果一个格子是1 
                //朝左侧延伸，就能比它左侧的最大延伸+1
                //朝上侧延伸，就能比它左侧的最大延伸+1
                if(g[i][j] ==1){
                    up[i][j]=i==0?1:up[i-1][j]+1;
                    left[i][j]=j==0?1 :left[i][j-1]+1;
                }
                
                //朝下朝右侧延伸，还未处理
                //右和下的预处理，我们从右下角的元素开始计算
                
                //朝右侧延伸，就能比它右侧的最大延伸+1
                
                if(g[n-1-i][n-1-j] ==1){
                    down[n-1-i][n-1-j]=i== 0?1:down[n-1-i+1][n-1-j]+1;
                    right[n-1-i][n-1-j]=j==0?1: right[n-1-i][n-1-j+1]+1;
                }
            }
        }          
        //遍历每个格子，计算以其为中心是+大小
        int result =0;
        int cellValue = 0;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                //获取这个格子朝四个方向延伸的最大值，其中最小值就是+的k值
                cellValue=findMin(left[i][j],right[i][j],up[i][j],down[i][j]);
                result =Math.max(result,cellValue);
            }
        }
        return result;
    }
public int findMin(int...val){
        int min = val[0];
        for(int v:val){
            min = Math.min(min,v);
        }
        return min;
    }
}
