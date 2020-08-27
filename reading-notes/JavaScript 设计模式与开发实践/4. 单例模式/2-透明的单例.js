/**
 * 优点：可以和普通的对象一样通过New调用
 * 缺点：违反单一职责原则（1：创建对象 2：保证只有一个对象）
 */
class Singleton {
	// static instance = null;
	// name;

	/**
	 * @return {number}
	 */
	constructor(name) {
		if (!Singleton.instance) {
			this.name = name
			Singleton.instance = this
		}

		return Singleton.instance
	}
}

let s1 = new Singleton('fool')
let s2 = new Singleton('yf')
console.log(s1 === s2)