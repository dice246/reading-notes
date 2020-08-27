const HashTable = require('./HashTable')
const LinkList = require('../6-linkedList/LinkedList')
const ValuePair = require('./ValuePair');

/**
 * 线性探查处理散列表的冲突
 */
class HashTableSeparateChaining extends HashTable {
  constructor() {
    super();
  }

  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let idx = position + 1;

        while (this.table[idx] !== null) {
          idx++;
        }

        this.table[idx] = new ValuePair(key, value);
      }

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }

      let idx = position + 1;
      while (this.table[idx] != null && this.table[idx].key !== key) {
        idx++;
      }

      if (this.table[idx] != null && this.table[idx].key === key) {
        return this.table[idx].value;
      }
    }
  }

  remove(key) {
    const position = this.hashCode(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let idx = position + 1;
      while (this.table[idx] != null && this.table[idx].key !== key) {
        idx++;
      }

      if (this.table[idx] != null && this.table[idx].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
    }

    return false;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}
