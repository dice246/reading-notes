/**
 * DC 分而治之（当一个问题比较大时，可以分割为几个相同的小问题进行解决）
 * 工作原理：
 * 1. 找出简单的基线条件
 * 2. 确定如何缩小问题的规模，使其符合基线条件
 * @param arr
 * @returns {*}
 */
function sum(arr) {
    if (arr.length) {
        let num = arr.pop();
        return num + sum(arr);
    }

    return 0;
}

console.log(sum([1, 2, 4, 5, 7]))