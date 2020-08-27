const Node = require('./Node');
const LinkedList = require('./LinkedList')

class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  insert(element, index) {
    if (index > 0 && index < this.count) {
      let node = new Node(element);
      let current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;  // 循环指向
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else{
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;

      }
      this.count--;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index > 0 && index < this.count) {
      let current = this.head;
      if(index === 0) {
        if (this.size() === 1) {
          this.head = null;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}
