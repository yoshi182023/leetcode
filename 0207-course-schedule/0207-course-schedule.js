/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = {}; 
    let visited = new Set()
    for(let [a,b] of prerequisites){
        if(!adjList[a]){ //if we don't have a value already in the adjacency list at a 
            adjList[a] = [b]

        }else{
            adjList[a].push(b)
        }
    }
    function dfs(curr){ //current course we are visiting 
        if(visited.has(curr)) return false; // 发现环 basecase  twice
        //we have a cycle
        if(adjList[curr] === []) return true;
        visited.add(curr) // 标记为正在访问
        if(adjList[curr]){
            for (let prereq  of adjList[curr]){
                if(!dfs(prereq)){
                    return false 
                }
            }
        }
        visited.delete(curr)
        adjList[curr]= []
        return true 
    }
    //loop through the keys with the adjacency list and run dfs
    for(let key in adjList){
        if(!dfs(key)){
            return false 
        }
    }
    return true 
};