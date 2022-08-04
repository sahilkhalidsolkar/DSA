class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = this.last = newNode
            this.size++
        } else {
            // naya node add karneka end mein 
            this.last.next = newNode
            this.last = newNode
            this.size++

        }

        return this.size
    }
    dequeue() {
        // aage se ek  node nikalne ka 
        // ek side se dalne ka dusre side se nikalne ka
        let temp = null;
        if (!this.first) return null
        if (this.first === this.last) {
            temp = this.first
            this.first = this.last = null
            this.size--
        } else {
            temp = this.first
            this.first = this.first.next

            // severe the temp connection with the rest of the queue
            temp.next = null
            this.size--
        }
        return temp
    }
}
const q = new Queue()
console.log(q.enqueue(10));
console.log(q.enqueue(20));
console.log(q.enqueue(30));
console.log(q.enqueue(40));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
// console.log(q.enqueue(110));

console.log(q.dequeue());
console.log(q)