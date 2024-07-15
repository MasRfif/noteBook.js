class Queue {
  #container = [];

  dequeue() {
    this.#container.shift();
  }
  enqueue(element) {
    this.#container.push(element);
  }
  getElements() {
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue("mabar");
queue.enqueue("tidur");
queue.enqueue("tidur");
queue.enqueue("benerin error");

console.log(queue.getElements());
queue.dequeue;
console.log(queue.getElements());
