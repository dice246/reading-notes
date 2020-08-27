class Dictionary {
  constructor() {
    this.table = {}
  }

  set (key, value) {
    if (key !== null && value !== null) {
      this.table[key] = value;
      return true;
    }

    return false;
  }

  remove (key) {
    if (this.hasKey(key)) {
      delete this.table[key]
      return true;
    }

    return false;
  }

  hasKey (key) {
    return this.table[key] != null;
  }

  get(key){
    if (this.hasKey(key)) {
      return this.table[key]
    }

    return undefined;
  }

  clear () {
    this.table = {}
  }

  size () {
    return Object.keys(this.table).length
  }

  isEmpty () {
    return this.size() === 0;
  }

  keys () {
    return Object.keys(this.table)
  }

  values () {
    return Object.values(this.table)
  }

  keyValues () {
    return Object.entries(this.table)
  }

  forEach (cb) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = cb(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
}

const d  = new Dictionary();
d.set('name', 'dice');
d.set('age', 18);
console.log(d.get('name'))
console.log(d.hasKey('name'))
