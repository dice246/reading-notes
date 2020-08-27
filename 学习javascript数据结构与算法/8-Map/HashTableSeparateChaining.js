const HashTable = require('./HashTable')
const LinkList = require('../6-linkedList/LinkedList')
const ValuePair = require('./ValuePair');

/**
 * 分离链表法处理散列表的冲突
 */
class HashTableSeparateChaining extends HashTable{
  constructor() {
    super();
  }

  put(key, value) {
    if (key  && value) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new LinkList();
      }

      this.table[position].push(new ValuePair(key, value));
      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current !== null) {
        if (current.element.key == key) {
          return current.element.value;
        }

        current = current.next;
      }
    }

    return undefined;
  }

  remove (key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position];

    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current !== null) {
        if (current.element.key === key) {
          linkedList.remove(current.element.value);
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }

          return true;
        }

        current = current.next;
      }
    }

    return false
  }
}
