//Binary tree implementation
class BinaryTreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            if (!current.left) {
                current.left = newNode;
                return;
            } else if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (!node) return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
}

// Example Usage:
const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);

console.log("In-order Traversal:");
binaryTree.inOrderTraversal();
