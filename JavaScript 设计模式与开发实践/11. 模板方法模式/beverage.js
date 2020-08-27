/**
 * 饮料
 * @constructor
 */
function Beverage() {
	
}

Beverage.prototype.boilWater = function () {
	console.log('把水煮沸')
}

Beverage.prototype.brew = function () {
}

Beverage.prototype.pourInCup = function () {
}

Beverage.prototype.addCondiments = function () {
}

/**
 * hook  钩子方法
 * @returns {boolean}
 */
Beverage.prototype.isAddCondiments = function () {
	return true;
}


Beverage.prototype.init = function () {
	this.boilWater()
	this.brew()
	this.pourInCup()
	this.isAddCondiments() && this.addCondiments()
}

/**
 * 茶
 * @constructor
 */
function Tea() {

}

Tea.prototype = Object.create(Beverage.prototype)

Tea.prototype.brew = function () {
	console.log('用沸水浸泡茶叶')
}

Tea.prototype.pourInCup = function () {
	console.log('将茶倒进杯子')
}

Tea.prototype.addCondiments = function () {
	console.log('加柠檬')
}

Tea.prototype.isAddCondiments = function () {
	return false;
}

/**
 * 咖啡
 * @constructor
 */
function Coffee() {

}

Coffee.prototype = Object.create(Beverage.prototype)

Coffee.prototype.brew = function () {
	console.log('用沸水煮咖啡')
}

Coffee.prototype.pourInCup = function () {
	console.log('把咖啡倒入杯子')
}

Coffee.prototype.addCondiments = function () {
	console.log('加糖和牛奶')
}


let tea = new Tea();
let coffee = new Coffee();

tea.init();
console.log('.........')
coffee.init();