function compare(arr1, arr2) {
	let it1 = arr1[Symbol.iterator]();
	let it2 = arr2[Symbol.iterator]();

	if (arr1.length !== arr2.length) {
		return false;
	}

	let [it1Next, it2Next] = [it1.next(), it2.next()];
	console.log()
	while (!it1Next.done && !it2Next.done) {
		if (it1Next.value !== it2Next.value) {
			return false;
		}

		[it1Next, it2Next] = [it1.next(), it2.next()];
	}

	return true;
}

console.log(compare([1, 2, 3], [1, 2, 3, 4])) // false
console.log(compare([1, 2, 3], [1, 2, 3]))  // true
console.log(compare([1, 2, 6], [1, 2, 3]))  // false