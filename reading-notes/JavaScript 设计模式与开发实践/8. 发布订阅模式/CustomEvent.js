class CustomEvent {
	constructor() {
		this.subscribers = []
		this.cacheSubscribers = []; // 缓存先发布的事件函数
	}

	each (ary, fn) {
		for (let i = 0, l = ary.length; i < l; i++) {
			let n = ary[i];
			fn.call(n, i, n)
		}
	}

	_listen (key, fn) {
		if (!this.subscribers[key]) {
			this.subscribers[key] = [];
		}

		this.subscribers[key].push(fn);
	}

	listen (key, fn) {
		this._listen(key, fn);

		if (this.cacheSubscribers === null) {
			return;
		}

		this.each(this.cacheSubscribers, function () {
			this();
		})

		this.cacheSubscribers = null;
	}

	_trigger (key, rest) {
		let fns = this.subscribers[key];
		let _self = this;

		if (!fns || !fns.length) {
			return false
		}

		this.each(fns, function () {
			this.apply(_self, rest);  // this: n    _self: CustomEvent
		})
	}

	trigger (key, ...rest) {
		let fn = () => {
			this._trigger(key, rest);
		}

		if (this.cacheSubscribers) {
			this.cacheSubscribers.push(fn);
		}

		return fn();
	}

	remove (key, fn) {
		let fns = this.subscribers[key];

		if (!fns) {
			return false;
		}

		if (!fn) {
			fns.length = 0;
		} else {
			let index = fns.findIndex((_fn) => _fn === fn);

			index !== -1 && fns.splice(index, 1);
		}
	}
}


let e = new CustomEvent();

e.trigger('say', 'word')

e.listen('say', function (...rest) {
	console.log('订阅1：', rest)
})

