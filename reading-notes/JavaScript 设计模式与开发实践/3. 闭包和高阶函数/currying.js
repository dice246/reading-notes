function currying(fn) {
	let args = []

	return function () {
		arguments.length ? args.push(...arguments) : fn.call(this, args)
	}
}

function cost() {
	let money = 0;
	let arg = Array.from(arguments[0]);

	for (let i = 0; i < arg.length; i++) {
		money += arg[i]
	}

	console.log(money)
}


let t = currying(cost)

t(10, 1);
t(10, 1, 1);
t(22);
t();  // 45