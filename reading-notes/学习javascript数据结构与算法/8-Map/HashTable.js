const ValuePair = require('./ValuePair');

class HashTable {
  constructor() {
    this.table = {}
  }


  toStrFn(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const pos = this.hashCode(key);
      this.table[pos] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair) {
      delete this.table[hash]
      return true;
    } else {
      return false;
    }
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair ? valuePair.value : undefined
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }

    // 防止key是一个对象
    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
      // 规避操作数做大
      return hash % 37;
    }
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }
}

module.exports = HashTable

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
