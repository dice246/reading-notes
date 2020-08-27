class Chain {
	constructor(fn) {
		this.fn = fn;
		this.successor = null;
	}

	setNextSuccessor(successor) {
		return this.successor = successor
	}

	passRequest(...rest) {
		let ret = this.fn.apply(this, rest);

		if (ret === 'next') {
			return this.successor && this.successor.passRequest.apply(this.successor, rest)
		}

		return ret;
	}

	/**
	 * 手动调用
	 * @param rest
	 * @returns {null|*}
	 */
	next (...rest) {
		return this.successor && this.successor.passRequest.apply(this.successor, rest);
	}
}

function f1() {
	console.log('f1');
	return 'next'
}

function f2() {
	console.log('f2')
	setTimeout(() => {
		this.next();
	}, 1000)
}

function f3() {
	console.log('f3')
}

let c1 = new Chain(f1);
let c2 = new Chain(f2);
let c3 = new Chain(f3);

c1
	.setNextSuccessor(c2)
	.setNextSuccessor(c3);

c1.passRequest();
