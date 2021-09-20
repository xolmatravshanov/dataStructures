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

    shift(){
        if(this.length === 0)return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        
        if(index < 0 || index >= this.length) return undefined;
        
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
            return current;
        }else{
             var count = index - 1;
             var current = this.tail;
             while(count !== index){
                 current = current.prev;
                 count--;
             }
             return current;
        }

    }


    
}
