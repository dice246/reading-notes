/**
 * 500元定金
 * @param type 1: 500元定金  2： 200元定金 3：普通
 * @param pay true: 已支付  false: 未支付
 * @param stock 库存
 * @returns {string}
 */
function order500(type, pay, stock) {
	if (type === 1 && pay === true) {
		console.log('500元定金，得到100优惠券')
	} else {
		return 'next'
	}
}

/**
 * 200元定金
 * @param type
 * @param pay
 * @param stock
 * @returns {string}
 */
function order200(type, pay, stock) {
	if (type === 2 && pay === true) {
		console.log('200元定金，得到50优惠券')
	} else {
		return 'next'
	}
}

/**
 * 普通用户
 * @param type
 * @param pay
 * @param stock
 */
function normalOrder(type, pay, stock) {
	if (stock) {
		console.log('普通购买')
	} else {
		console.log('库存不足')
	}
}


class Chain {
	constructor(fn) {
		this.fn = fn;
		this.successor = null;
	}

	setNextSuccessor(successor) {
		this.successor = successor
	}

	passRequest(...rest) {
		let ret = this.fn.apply(this, rest);

		if (ret === 'next') {
			return this.successor && this.successor.passRequest.apply(this.successor, rest)
		}

		return ret;
	}
}

let chainOrder500 = new Chain(order500)
let chainOrder200 = new Chain(order200)
let chainOrderNormal = new Chain(normalOrder)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(3, false, 500)
chainOrder500.passRequest(3, false, 0)


