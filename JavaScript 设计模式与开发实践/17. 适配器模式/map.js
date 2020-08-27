let googleMap = {
	show () {
		console.log('render google map')
	}
}

let baiduMap = {
	display () {
		console.log('render baidu map')
	}
}

let amap = {
	show () {
		console.log('render a map')
	}
}

let baiduMapAdapter = {
	show () {
		return baiduMap.display()
	}
}

let renderMap = (map) => {
	map.show();
};

renderMap(googleMap);
renderMap(baiduMapAdapter);
renderMap(amap);