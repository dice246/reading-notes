/**
 * 自定义事件
 */
const event = {
	clientList: [],
	listen (key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = []
		}

		this.clientList[key].push(fn)
	},
	trigger (key, ...rest) {
		let fns = this.clientList[key];

		if (!fns || !fns.length) {
			return false
		}

		fns.forEach((fn) => {
			fn.apply(this, rest)
		})
	},
	remove (key, fn) {
		let fns = this.clientList[key]

		if (!fns) {
			return false
		}

		if (!fn) {
			fns.length = 0;
		} else {
			let index = fns.findIndex((_fn) => _fn === fn);

			index !== -1 && fns.splice(index, 1)
		}
	}
}


let world = Object.assign({}, event);
let eatFn1 = function (food) {
	console.log(`eat1: ${food}`)
}

let eatFn2 = function (food) {
	console.log(`eat2: ${food}`)
}

world.listen('eat', eatFn1)

world.listen('eat', eatFn2)

world.listen('sleep', function (person, address) {
	console.log(`sleep: ${person} ${address}`)
})


world.trigger('eat', 'tree')
world.trigger('eat', 'sugar')
world.trigger('sleep', '小明', '北京')
// 结果
// eat1: tree
// eat2: tree
// eat1: sugar
// eat2: sugar
// sleep: 小明 北京


world.remove('eat', eatFn1)

world.trigger('eat', 'tree')
world.trigger('eat', 'sugar')
world.trigger('sleep', '小明', '北京')
// 结果
// eat2: tree
// eat2: sugar
// sleep: 小明 北京

world.remove('sleep');

world.trigger('eat', 'tree')
world.trigger('eat', 'sugar')
world.trigger('sleep', '小明', '北京')

// 结果
// eat2: tree
// eat2: sugar