class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getsize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  apped(value) {
    const node = new Node(value);
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    this.size++;
  }

  insert(index, value) {
    const node = new Node(value);
    let curr = this.head;
    let count = 0;

    while (curr) {
      if (count === index) {
        node.next = curr.next;
        curr.next = node;
        this.size++;
        break;
      }
      curr = curr.next;
      count++;
    }
  }

  print() {
    let listValue = " ";

    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      while (curr) {
        listvalue += `${curr.value}`;
        curr = curr.next;
      }
    }
    console.log(listValue);
  }
}

const list = new linkedlist();

console.log(list.isEmpty());
console.log(list.getsize());

list.prepend(10);
list.prepend(20);
console.log(list.isEmpty());
console.log(list.getsize());
