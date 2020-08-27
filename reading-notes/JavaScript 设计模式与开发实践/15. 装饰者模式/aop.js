Function.prototype.before = function (fn) {
	let _self= this;
	return function () {
		fn.apply(this, arguments);  // 防止this丢失

		return _self.apply(this, arguments)
	}
}

Function.prototype.after = function (fn) {
	let _self = this;

	return function () {
		let ret = _self.apply(this, arguments);
		fn.apply(this, arguments);

		return ret;
	}
}

let buy = function () {
	console.log('buy good')
}


buy = buy
	.before(function () {
		console.log('before...')
	})
	.after(function () {
		console.log('after...')
	});

buy();