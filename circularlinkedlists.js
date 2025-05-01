//Circular Linked lists implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
//Insert a newNode
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode; 
            this.tail = newNode;     
            this.tail.next = this.head;
        }
    }

 //Delete value  
    delete(value) {
        if (!this.head) return; 

        let current = this.head;
        let prev = this.tail;

        do {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head; 
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }

 //print the list   
    print() {
        if (!this.head) return console.log("List is empty");

        let current = this.head;
        let output = [];

        do {
            output.push(current.value);
            current = current.next;
        } while (current !== this.head);

        console.log(output.join(" -> ") + " (circular)");
    }
}

//Testing the list
const fruitList = new CircularLinkedList();
fruitList.append("Apple");
fruitList.append("Banana");
fruitList.append("Cherry");
fruitList.append("Watermelon");
fruitList.print(); 
 // Output:
 //Apple -> Banana -> Cherry -> Watermelon (circular)

fruitList.delete("Banana");
fruitList.print(); 
 // Output: 
 //Apple -> Cherry -> Watermelon (circular)