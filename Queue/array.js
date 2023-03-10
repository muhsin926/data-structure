class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
    console.log(element + "enqueued to queue");
  }
  dequeue() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  print() {
    let i = 0;
    while (i < this.items.length) {
      console.log(this.items[i]);
      i++;
    }
  }
}

var queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
// queue.print()
queue.dequeue();

queue.print();
