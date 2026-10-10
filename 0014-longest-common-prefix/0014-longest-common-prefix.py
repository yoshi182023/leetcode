class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        res = ""
        #simultaneously iterate through all of the string 
        # use a pointer i to inidate what index that we are at in the strings 
        for i in range(len(strs[0])):
        #first string 
        #could be not the shortest string in the input 
        #make sure all of the strings have the exact same character at index i
            for s in strs:
                #in the list of strings that we are given 
                #we want to check that every single string at index i is the same
                if i == len(s) or s[i] != strs[0][i]:
                    return res
            res += strs [0][i]
        return res
                

