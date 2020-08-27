let a = 123;

/**
 * 词法作用域
 * 和定义的位置有关系，和调用位置无关
 */
function f() {
	console.log(a)
}

function f1() {
	let a = 321;
	f();  // 123
}

f1();