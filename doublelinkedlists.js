//double linked lists implementation
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedList{
    constructor(){
      this.head=null;
      this.tail=null; 
    }

//Insert newNode    
    append(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
    }
//Delete the value    
    delete(value){
        if(!this.head) return;
        let current=this.head;
        while(current){
            if(current.value===value){
                if(current===this.head){
                    this.head=current.next;
                    if(this.head)this.head.prev=null;
                }else if(current===this.tail){
                    this.tail=current.prev;
                    if(this.tail)this.tail.newNode=null;
                }else{
                    current.prev.next=current.next;
                    current.next.prev=current.prev;
                }
                return;
            }
            current=current.next;
        }
    }

//Print list in forward    
    printForward(){
        let current=this.head;
        let output=[];
        while(current){
            output.push(current.value);
            current=current.next;
        }
        console.log("Forward:"+ output.join(" <-> "))
    }

    //Print backward
    printReverse() {
        let current = this.tail;
        let output = [];
        while (current) {
            output.push(current.value);
            current = current.prev;
        }
        console.log("Reverse: " + output.join(" <-> "));
    }
}

//Testing list
const fruitList = new DoublyLinkedList();
fruitList.append("Apple");
fruitList.append("Banana");
fruitList.append("Cherry");
fruitList.append("Watermelon");
fruitList.printForward();  
fruitList.printReverse();  
fruitList.delete("Banana");
fruitList.printForward(); 

fruitList.printReverse(); 

