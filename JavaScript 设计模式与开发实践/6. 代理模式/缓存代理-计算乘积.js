/**
 * 计算乘积
 * @returns {any}
 */
function mult() {
	let args = Array.from(arguments);
	let result = args.reduce((acc, cur) => {
		return acc * cur;
	}, 1)
	return result;
}


/**
 * 代理
 */
let proxyMult = (function () {
	let cache = {};

	return function () {
		let args = Array.from(arguments);
		let key = args.join(',');

		if (key in cache) {
			console.log('缓存结果...')
			return cache[key]
		} else {
			return cache[key] = mult.apply(this, arguments) // 保持接口的一致性
		}
	}
})()

console.log(proxyMult(1,3,4,5,6))
console.log(proxyMult(1,3,4,5,6))
console.log(proxyMult(1,3,4,5))