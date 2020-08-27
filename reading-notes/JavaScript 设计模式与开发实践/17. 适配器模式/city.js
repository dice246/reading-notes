let guangDongCity = [
	{name: 'shenzhen', id: 1},
	{name: 'guangzhou', id: 2}
]

let addressAdapter = function (oldAddress) {
	let data = [];

	oldAddress.forEach((item) => {
		let address = {[item.name]: item.id};

		data.push(address)
	})

	return data;
};

let render = (data) => {
	console.log(data)
}

render(addressAdapter(guangDongCity))