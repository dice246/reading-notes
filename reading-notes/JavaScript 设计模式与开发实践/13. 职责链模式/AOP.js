/**
 * AOP
 * @param fn
 * @returns {Function}
 */
Function.prototype.after = function (fn) {
	let self = this;

	return function () {
		let ret = self.apply(this, arguments);

		if (ret === 'next') {
			return fn.apply(this, arguments);
		}

		return ret;
	}
}


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


let order = order500.after(order200).after(normalOrder);

order(1, true, 500)
order(2, true, 500)
order(3, true, 500)
order(3, false, 500)
order(3, false, 0)