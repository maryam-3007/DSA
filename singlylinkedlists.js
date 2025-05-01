//linked list involves head,tail,node,value,next
//Nodes will be in the form of objects

//Singly linked list implementation
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

//Insert newNode    
append(value) {
 const newNode = new Node(value);
 if (!this.head) {
     this.head = newNode;
 } else {
 let current = this.head;
    while (current.next) {
    current = current.next;
}
    current.next = newNode;
}
}

//Delete value
delete(value) {
 if (!this.head) return;
 if (this.head.value === value) {
 this.head = this.head.next;
  return;
}

let current = this.head;
 let prev = null;
      while (current && current.value !== value) {
      prev = current;
      current = current.next;
}

    if (current) {
        prev.next = current.next;
    }
}

//Print the list
print() {
    let current = this.head;
    let output = [];
    while (current) {
    output.push(current.value);
    current = current.next;
}
    console.log(output.join(" -> "));
}
}

//Testing the list
const fruitList = new LinkedList();
fruitList.append("apple");
fruitList.append("banana");
fruitList.append("cherry");
fruitList.print();  

fruitList.delete("banana");
fruitList.print(); 
 