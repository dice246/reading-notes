let each = function (elem, callback) {
	for (let i = 0, per; per = elem[i++];) {
		callback.call(elem, per, i)
	}
}

each(['lol', 'dota', 'other'], function (per, i) {
	console.log(per, i)
})