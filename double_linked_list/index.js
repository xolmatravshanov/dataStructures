class Node {

    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }


} 


class DoublyLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next  = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
     
    pop(){
        if(!head) return undefined;

        var popedNode = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail  = popedNode.prev;
            this.tail.next = null;
        }

        this.length--;
        return popedNode;
    }

 

}
