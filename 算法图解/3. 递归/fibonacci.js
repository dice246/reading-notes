/**
 * 斐波那契数列
 * @param n
 * @returns {*}
 */
function fibonacci(n) {
	if (n <= 2) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log('方法1：', fibonacci(6));


/**
 * Iterator为各种不同的数据解构提供统一的访问机制。任何数据解构只要部署Iterator接口，就可以完成遍历操作。
 * for...of循环消费iterator接口
 * @param n
 */
function fibonacci2(n) {
	function *next (n) {
		let [prev, current] = [0, 1];

		for(let i = 0; i <= n; i++) {
			yield current;
			[prev, current] = [current, prev + current];
		}
	}

	for (let num of (next(n))) {
		console.log(num)
	}
}

console.log('方法2：', fibonacci2(5))
