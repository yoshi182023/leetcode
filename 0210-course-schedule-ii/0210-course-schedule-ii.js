/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
     // 1. 初始化邻接表（用对象存储）
    const prereq = {};
    
    // 2. 构建邻接表
    for (const [course, pre] of prerequisites) {
        if (!prereq[course]) {
            prereq[course] = [];
        }
        prereq[course].push(pre);
    }

    const output = [];
    const visited = new Set();
    const cycle = new Set();

    // 3. DFS函数
    const dfs = (course) => {
        if (cycle.has(course)) {
            return false; // 检测到环
        }
        if (visited.has(course)) {
            return true; // 已访问过
        }

        cycle.add(course);
        
        // 获取该课程的所有先修课（如果没有则为空数组）
        const pres = prereq[course] || [];
        for (const pre of pres) {
            if (dfs(pre) === false) {
                return false; // 子DFS检测到环
            }
        }

        cycle.delete(course);
        visited.add(course);
        output.push(course);
        return true;
    };

    // 4. 对所有课程执行DFS
    for (let course = 0; course < numCourses; course++) {
        if (dfs(course) === false) {
            return []; // 发现环，返回空数组
        }
    }

    return output;
};