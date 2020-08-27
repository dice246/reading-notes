const LinkedList = require('./LinkedList');
const DoublyNode = require('./DoublyNode')

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();

    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (index === 0) {
        if (current === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.pre = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        node.prev = previous;
        previous.next = node;
        current.prev = node;
      }

      this.count++;
      return true;
    }

    return undefined;
  }

  removeAt(index) {
    if (index > 0 && index <= this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
        if(this.count === 1) {
          this.tail = null;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {  // 最后一个元素
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}
