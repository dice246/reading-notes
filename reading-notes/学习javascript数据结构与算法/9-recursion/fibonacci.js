/**
 * 斐波那契数列
 * @param n
 * @returns {number|*}
 */
function fibonacci(n) {
  if (n < 1) {
    return 0
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 缓存
 * @returns {fibonacci}
 */
function fibonacciMemoization() {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) {
      return memo[n]
    }

    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  }

  return fibonacci;
}

console.log(fibonacci(3))

const f2 = fibonacciMemoization();
console.log(f2(4));

