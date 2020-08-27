class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }


    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;
    objString = `${objString},${this.items[i]}`;
    return objString;
  }
}

/**
 * 进制转换
 * @param decNumber
 * @param base
 * @returns {string}
 */
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }
  return baseString;
}

console.log(baseConverter(100345, 16))
