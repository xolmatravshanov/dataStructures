class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(val);
        if(!this.root){
            this.root  = newNode;
            return this;    
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(current.value > value){
                        if(current.left === null){
                            current.left = newNode;
                            return this;
                        }else{
                            current  = current.left;
                        }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current  = current.right;
                    }
                }
            }
        }
           
    }

    find(value){
        if(!this.root) return false;
        var current = this.root,
            found  = false;

        while(current && !found){
           if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }   

        if(!found) return false;
        
        return current;
    }
}