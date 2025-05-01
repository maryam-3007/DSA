//Simple tree implementation
class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    // Add child node
    addChild(node) {
        if(node instanceof  TreeNode){
            this.children.push(node);
        }else{
      this.children.push(new TreeNode(node));
        }
    }
  
    // Display tree
    display(indent = 0) {
      console.log(" ".repeat(indent) + this.value);
      for (let child of this.children) {
        child.display(indent + 2);
      }
    }
  }
  
//adding categories to root
const root=new TreeNode("Fruits");
const banana=new TreeNode("Banana");
const cherry=new TreeNode("Cherry");
const watermelon=new TreeNode("Watermelon");
const Guava=new TreeNode("Guava");

//adding specific fruits for categories
root.addChild(banana);
root.addChild(cherry);

root.addChild(watermelon);
root.addChild(Guava);

banana.addChild("Strawberry");
banana.addChild("Pineapple");

cherry.addChild("grapes");
cherry.addChild("Orange");

watermelon.addChild("Mango");
watermelon.addChild("Sweet Lime");

Guava.addChild("Pomegranate");
Guava.addChild("Apple");

//display the tree
root.display();

