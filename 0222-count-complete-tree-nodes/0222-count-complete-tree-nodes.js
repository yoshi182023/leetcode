var countNodes = function(root) {
    const getNum = (node) => {
        if (node === null) return 0;

        let left = node.left;
        let right = node.right;
        let leftdepth = 0;
        let rightdepth = 0;

        while (left) {
            left = left.left;
            leftdepth++;
        }
        while (right) {
            right = right.right;
            rightdepth++;
        }

        if (leftdepth === rightdepth) {
            // 满二叉树：节点数 = 2^(高度) - 1
            return (2 ** (leftdepth + 1)) - 1;
        } else {
            // 否则递归
            return 1 + getNum(node.left) + getNum(node.right);
        }
    };

    return getNum(root);
};
