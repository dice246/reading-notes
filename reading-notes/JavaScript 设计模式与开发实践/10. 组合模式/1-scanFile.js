class Folder {
	constructor (name) {
		this.name = name;
		this.files = []
	}

	add (file) {
		this.files.push(file)
		return this;
	}

	scan () {
		console.log(`开始扫描文件夹：${this.name}`);
		this.files.forEach((file) => {
			file.scan();
		})
	}
}

class File {
	constructor(name) {
		this.name = name;
	}

	add () {
		throw 'file not scan'
	}

	scan () {
		console.log(`开始扫描文件: ${this.name}`)
	}
}

let folder = new Folder('学习资料');
let folderFe = new Folder('前端资料');
let folderBase = new Folder('基础资料');

let react = new File('react');
let webpack = new File('webpack');
let es6 = new File('es6');

let algorithm = new File('algorithm');
let designPattern = new File('DesignPattern');

folderFe
	.add(react)
	.add(webpack)
	.add(es6)

folderBase
	.add(algorithm)
	.add(designPattern)

folder
	.add(folderFe)
	.add(folderBase)

folder.scan();
