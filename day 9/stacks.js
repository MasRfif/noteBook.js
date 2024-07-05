class Stack {
  #maxsize;
  #cointain = [];

  constructor(maxsize = 10) {
    this.#maxsize = maxsize;
  }
  #isEmpty() {
    return this.#cointain.length === 0;
  }
  #isFull() {
    return this.#cointain.length >= this.#maxsize;
  }

  push(element) {
    if (this.#isFull()) {
      console.log("stack overflow");
      return;
    }
    this.#cointain.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("stack overflow");
      return;
    }
    this.#cointain.pop(element);
  }
}

const stack = new Stack();
stack.push(10);
