//Queue implementation
class Queue{
    constructor(){
        this.queue=[];
    }
//push enqueue
    enqueue(element){
        this.queue.push(element);
    }
//dequeue
    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }

       return this.queue.shift();
        }

        isEmpty(){
            return this.size===0;
        }

        front(){
            if(this.isEmpty()){
                return "No Elements in the Queue";
            }
            return this.queue[0];
        }
        size(){
            return this.queue.length;
        }

        //print Queue
        printQueue(){
            let queueStirng=""
            for(let i=0;i<this.size();i++){
            queueStirng +=this.queue[i]+", ";
    }
        console.log("Queue:" +queueStirng);
        }
    }

    //Testing the queue
    const myQueue=new Queue();
    myQueue.enqueue("Banana");
    myQueue.enqueue("Watermelon");
    myQueue.enqueue("Apple");
    myQueue.enqueue("cherry");

    console.log("Queue after enqueuing elements:");
    myQueue.printQueue();
    

    console.log("dequeued:",myQueue.dequeue());
   console.log(myQueue.front());
  

  

