class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (this.has(element)) {
      return false
    } else {
      this.items[element] = element;
      return true;
    }
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true;
    } else {
      return false;
    }
  }

  has (element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length;
  }

  values () {
    return Object.values(this.items)
  }
}

module.exports = Set;

// const set = new Set();
//
// set.add(1)
// set.add(2)
//
// console.log(set.values());
//
// console.log(set.has(1))
// console.log(set.has(3))
//
// console.log(set.delete(1));
//
// console.log(set.size());
//
// set.clear();
// console.log(set.values());
