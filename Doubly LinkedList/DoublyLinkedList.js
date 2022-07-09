class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    isEmpty(){
        return this.head===null
    }
    push(val){
        const newNode= new Node(val)
        if(this.isEmpty()){
            this.head=this.tail = newNode
        }else{
            this.tail.next=newNode
            newNode.prev=this.tail;
            this.tail=newNode
        }
        this.length++

    }
    pop(){
        if(this.isEmpty()) return undefined
        else if(this.head==this.tail && this.head!==null){
            let removedNode=this.tail;
            this.head=this.tail = null
            this.length--
            return removedNode
        }
            let removedNode=this.tail;
            let prevNode= this.tail.prev
            prevNode.next=null;
            this.tail=prevNode;
            // removing connection of removed elements
            removedNode.prev=null;
            this.length--

            return removedNode
    }
    shift(){
        // removes node from the beginning of the doubly linked list
        if(this.isEmpty()) return undefined
        else if(this.head==this.tail && this.head!==null){
            let removedNode=this.tail;
            this.head=this.tail = null
            this.length--
            return removedNode
        }
        let prevHead=this.head;
        this.head=this.head.next
        this.head.prev=null // remove prev connection of current head
        // remove prevHEad connections
        prevHead.next=null
        this.length--
        return prevHead
    }
    unshift(val){
        // adding a node to the beginning of the list
        const newNode = new Node(val);
        if(this.isEmpty()){
            this.head=this.tail=newNode
        }else{
            this.head.prev=newNode
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
    }
    get(index){
        let current,count
        if(this.isEmpty() || index < 0 || index>=this.length ) return undefined
        if(index<=(this.length/2)){ 
            //traverse the linked list from the head
            current=this.head
            count = 0
            while (count!=index) {
                current=current.next
                count++
            }
        }else{
            // traverse the linked list from the tail
            current=this.tail
            count = this.length-1
            while (count!=index) {
                current=current.prev
                count--
            }
        }
        return current
    }
    set(index , value){
        if(!this.get(index)) return false
        const node = this.get(index)
        node.val= value
        return true
    }
    insert(index,value){
        if(index==0) return !this.unshift(value) // so that it willreturn true after pushing or unshifting from the linked list 
        if(index==this.length) return !this.push(value) // so that it willreturn true after pushing or unshifting from the linked list
        if(index>=this.length) return false
        // other wise find the node previous to the index then insert the new node in between
        const newNode= new Node(value)
        const prevNode= this.get(index-1)
        const prevNodeNext=prevNode.next
        // link the new Node
        newNode.next=prevNodeNext
        prevNodeNext.prev=newNode
        newNode.prev=prevNode
        prevNode.next=newNode

        this.length++
        return true
    }
    remove(index){
        if(this.isEmpty()) return false
        if(index==0) return this.shift() // so that it willreturn true after poping or shifting from the linked list 
        if(index==this.length-1) return this.pop() // so that it willreturn true after poping or shifting from the linked list
        if(index>=this.length) return false
        // other wise find the node to remove
        const nodeToRemove = this.get(index)
        const prevNode=nodeToRemove.prev
        const afterNode=nodeToRemove.next
        // now remove the node
        prevNode.next=afterNode
        afterNode.prev=prevNode
        // now remove the connection of the removed node
        nodeToRemove.next=null;
        nodeToRemove.prev=null;
        this.length--
        return nodeToRemove

    }
}

const list = new DoublyLinkedList()
list.push('hey')
list.push('how')
list.push('are')
list.push('youh')
// console.log(list.pop());
// console.log(list.shift());
// list.unshift(10)
// list.unshift(20)
// console.log(list.get());
// console.log(list.set(0,'hello'));
// console.log(list.insert(4,'hello'));
console.log(list.remove(2));
console.log("main list",list);