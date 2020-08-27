class Queue {
  constructor() {
    this.count = 0;
    this.lowCount = 0;
    this.items = {};
  }

  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }

  isEmpty() {
    return this.count - this.lowCount === 0;
  }

  size() {
    return this.count - this.lowCount;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }

    let result = this.items[this.lowCount];
    delete this.items[this.lowCount];
    this.lowCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    let result = this.items[this.lowCount];
    return result;
  }

  clear() {
    this.items = {};
    this.lowCount = 0;
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

module.exports = Queue;
