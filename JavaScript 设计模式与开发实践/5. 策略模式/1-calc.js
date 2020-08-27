/**
 * 策略类
 * @type {{at(*): *, "ot+"(*): *, ot(*): *, "ot-"(*): *, bt(*): number}}
 */
const strategies = {
	'at' (salary) {
		return salary * 4
	},
	'ot+' (salary) {
		return salary * 3
	},
	'ot' (salary) {
		return salary * 2
	},
	'ot-' (salary) {
		return salary * 1
	},
	'bt' () {
		return 0
	}
}

/**
 * 环境类
 * @param level
 * @param salary
 * @returns {*}
 */
function calcBonus(level, salary) {
	return strategies[level](salary)
}
console.log(calcBonus('at', 50000)) // 200000
console.log(calcBonus('ot-', 20000))  // 20000
console.log(calcBonus('bt', 500)) // 0
