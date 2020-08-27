/**
 * 缺点：增加了类的不透明性
 * Singleton的使用者必须使用Singleton.getSingle()才能产生单例
 */
class Singleton {
	constructor(name) {
		this.name = name;
		this.instance = null;
	}

	static getSingle (name) { // 静态方法中的this指向的是类不是实例
		return this.instance || (this.instance = new Singleton(name))
	}
}

let s1 = Singleton.getSingle('fool')
let s2 = Singleton.getSingle('yf')
console.log(s1 === s2)  // true

let s3 = new Singleton('hello');
let s4 = new Singleton('world')
console.log(s3 === s4)  // false