//Generic Trees Implementation
class TreeNode{
    constructor(value){
        this.value=value;
        this.children=[];
    }

    addChild(child){
        this.children.push(child);
    }
}

class Tree{
    constructor(rootValue){
        this.root=new
        TreeNode(rootValue);
    }

    traverse(node=this.root){
        if(!node)return;
        console.log(node.value);
        for(let child of node.children){
            this.traverse(child)
        }
    }
}

const tree=new Tree(1);
const node2=new TreeNode(2);
const node3=new TreeNode(3);
const node4=new TreeNode(4);

tree.root.addChild(node2);
tree.root.addChild(node3);
node2.addChild(node4);

console.log("Tree Traversal:");
tree.traverse();
