//Stack Implementation

class Stack{
    constructor(){
        this.stack=[];
    }
//Push element
    push(element){
        this.stack.push(element)
    }
//Pop the element
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty.";
        }
      return this.stack.pop();

    }
//Print the peak element
    peak(){
        if(this.isEmpty()){
            return "Stack is Empty.Can't perform peak.";
        }
        return this.stack[this.size()-1];
    }
    isEmpty(){
        return this.size()===0;
    }
    size(){
        return this.stack.length;
    }
    printStack(){
        console.log(this.stack.join(" -> "));
    }
}

//Testing the stack
const stack=new Stack();
stack.push("Banana");
stack.push("cherry");
stack.push("Guava");
stack.push("watermelon");

console.log("Stack elements:");
stack.printStack();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peak());

console.log(stack.isEmpty());
