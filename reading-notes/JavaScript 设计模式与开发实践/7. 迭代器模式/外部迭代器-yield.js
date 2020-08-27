function *fib(times) {
	let [n1, n2] = [1, 1]

	for (let i = 0; i < times; i++) {
		yield n1;
		[n1, n2] = [n2, n1 + n2]
	}
}

for (let i of fib(10)) {
	console.log(i)
}