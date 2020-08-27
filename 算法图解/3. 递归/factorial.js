/**
 * 递归指的是调用自己的函数
 * 每个递归函数都有两个条件：基线条件（函数不在调用自身，避免无限循环）和递归条件（函数调用自身）
 * 栈的操作：压入和弹出
 * todo://所有函数的调用都是进入调用栈
 * 调用栈如果很长，将占用大量的内存。因为每个函数调用都要占用一定的内存
 * @param x
 * @returns {number}
 */
function fact(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
}

console.log(fact(5));