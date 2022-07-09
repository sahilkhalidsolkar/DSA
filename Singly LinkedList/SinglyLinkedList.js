class Node{
    constructor(val){
       this.val=val
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        const node = new Node(val)
        if(!this.head ){
            this.head=this.tail= node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.length++
        return this // return the linked list
    }
    pop(){
        if(!this.head) return undefined
        if(this.head==this.tail && this.head!=null){
            this.head=this.tail=null
            console.log('running');
        }
        let current=this.head
        let afterCurrent
        while(current){
           afterCurrent=current.next 
           // aage ka element tail hai kya dekhne ka 
        //    agar tail homga toh previous wale ko tail banane ka
            if(afterCurrent==this.tail){
                current.next=null
                this.tail=current
            }
            current=current.next
        }
        this.length--
        return afterCurrent
    }
    shift(){
        // remove the first element of the linked list i.e head
        if(!this.head) return undefined
        const currentHead=this.head
        // agar single element rahenga toh if block run honga
        if(this.head==this.tail && this.head!=null){
            this.head=this.tail=null
            this.length--
            return currentHead
        }
        // jo current head rahenga usko nikalenge 
        // aur jo next node rahenga currenthead ke baad ka usko as a head a head assign karenge
        this.head=currentHead.next
        this.length--
        return currentHead
    }
    unshift(val){
        // this method is used to insert element in the beginning of the linked list
        // unlike the push method
        const node = new Node(val)
        if(!this.head ){
            // if list is empty then run this code 
            this.head=this.tail= node
        }else{
            // other wise if there is one or more element in the list then run this code
            node.next=this.head
            this.head=node
        }
        this.length++
        return this // return the linked list
    }

    get(index){
        // returns the node of particular index
        if(index==undefined || index<0 || index >=this.length) return null
        // otherwise traverse the list to reach that particular element
        let current=this.head
        let count=0
        while (count<=index && current!=null){
            // agar count ki value eqal to rahengi index ke toh return karme ka
            // naytoh next node ki taraf jaane ka aur count ko increment karne ka
            if( count == index) return current
            current=current.next
            count++
        }
        return current

    }
    set(index,value){
        // this function changes the value of the node at particular index
        // here we use the get metho to find the node and the update it
       const current= this.get(index)
       if(!current) return false
       current.val=value
       return true
    }
    insert(index,value){
        // inserts a new node at the particular index
        if(index < 0 || index >this.length) return false //yaha pe agar index length ke equal rahenga toh insert kar sakte hai bcz woh lat mein insert karne bolat hai lekin agar length se greater rahenga toh usko error batane ka
        if( index ==this.length || this.head==null){ // for inserting at the beginnning or at the tail
            this.push(value)
        }else if(index==0 ){
            this.unshift(value)
        }else{
            let current=this.head
            let previous=this.head
            let count=0
            while(count!==index){
                previous=current
                current=current.next
                count++
            }
            const node = new Node(value)
            node.next=current
            previous.next=node
            this.length++
            console.log("prev",previous,"curr",current);
            return true
        }
    }

    remove(index){
        if(index<0 || index >=this.length) return undefined

        if(index==0) return this.shift()
        if(index==this.length-1) return this.pop()

        let toRemove=this.head;
        let previous = this.head;
        let count = 0;
        while(count!==index){ // yaha pe jabh count ki value index ke equal hongi tabhi break honga loop aur jo element remove karne ka hai voh milenga aur uska previous bhi milenga
            previous=toRemove;
            toRemove=toRemove.next;
            count++;
        }
        const temp = toRemove
        previous.next=toRemove.next;
        this.length--;
        return temp
    }
    reverse(){
        
        let previous=null;
        let current=this.head;
        while (current!==null) {
          let after =  current.next
          current.next=previous;
          previous=current;
          current=after
        }
        let prevTail=this.tail;
        this.tail=this.head
        this.head=prevTail
        return this
    }

}

const list=new SinglyLinkedList()
list.push('hey')
list.push('how')
list.push('are')
list.push('you')
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log('---------------------------------------------');
// console.log(list.unshift(10));
// console.log(list.unshift(20));
// console.log(list.unshift(30));
// console.log(list.push(100));
// console.log(list.set(1,"kaisa hai"));
// console.log(list.insert(5,10)); 
// console.log(list.remove(1)); 
// console.log(list.reverse());


console.log(list);