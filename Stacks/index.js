class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.data = null;
        this.top = null; //refernce the last element from the stack
        this.size = 0;
    }
    push(value) {
        let node = new Node(value)
        if (this.data == null || this.top == null) {
            this.data = this.top = node
            this.size++
        } else {
            // temp = this.data
            this.top = node;
            node.next = this.data
            this.data = node
            this.size++

        }
        return this.size
    }
    pop() {
        let temp = null;
        if (!this.data) {
            return temp
        } else if (this.size == 1) {
            temp = this.top
            this.data = this.top = null
            this.size--
        } else {
            temp = this.data
            this.data = this.data.next
            // severe the temp connection with the stack
            temp.next = null
            // now update the top value
            this.top = this.data
            this.size--
        }
        return temp.value
    }

}

const stack = new Stack()
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


console.log(stack);