class Folder {
	constructor (name) {
		this.name = name;
		this.parent = null;
		this.files = [];
	}

	add (file) {
		file.parent = this; // 给add进来的file增加父元素的指向
		this.files.push(file);
		return this;
	}

	scan () {
		console.log(`开始扫描文件夹：${this.name}`);
		this.files.forEach((file) => {
			file.scan();
		})
	}

	remove () {
		if (!this.parent) {  // 没有父元素
			return;
		}

		// 遍历父元素，删除自己
		this.parent.files.forEach((file, index) => {
			if (file === this) {
				this.parent.files.splice(index, 1)
			}
		})
	}
}

class File {
	constructor(name) {
		this.name = name;
		this.parent = null;
	}

	add () {
		throw 'file not scan'
	}

	scan () {
		console.log(`开始扫描文件: ${this.name}`)
	}

	remove () {
		if (!this.parent) {
			return;
		}

		this.parent.files.forEach((file, index) => {
			if (file === this) {
				this.parent.files.splice(index, 1)
			}
		})
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
console.log('..............')
folderFe.remove();
algorithm.remove();
folder.scan();

