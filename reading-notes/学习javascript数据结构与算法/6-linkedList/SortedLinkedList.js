const LinkedList = require('./LinkedList');

const compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
  constructor(props) {
    super(props);
  }

  insert(element, index = 0) {
    if(this.isEmpty()) {
      return super.insert(element, index)
    }

    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current; i++) {
      const  comp = defaultCompare(element, current.element);

      if (comp === compare.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}
