/**
 * 通用的惰性单例模式
 * @param fn
 * @returns {function(...[*]=): *}
 */
let getSingle = function (fn) {
	let result;
	return function (...rest) {
		return result || (result = new fn(rest))
	}
}

// es5
function Person(name) {
	this.name = name;
}

let P = getSingle(Person);
let p1 = new P('fool')
let p2 = new P('yf')
console.log(p1 === p2)

// ES6
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

let A = getSingle(Animal);
let a1 = new A('cat', 1)
let a2 = new A('dog', 2)
console.log(a1 === a2)