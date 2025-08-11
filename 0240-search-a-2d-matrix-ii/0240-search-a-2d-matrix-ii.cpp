class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int startRow = 0, startCol = matrix[0].size() -1;
        //右上角的坐标
        while(startCol >= 0 && startRow < matrix.size()){
            if(matrix[startRow][startCol] == target){
                return true;
            }
                //如果当前位置的值比目标值小 说明当前行都不能为目标值
            else if (matrix[startRow][startCol] < target){
                //当前行去掉
                startRow++;
            }
            else if(matrix[startRow][startCol] > target){
                //把列去掉
                startCol--;
            }

            }
            return false;
        }
    
};