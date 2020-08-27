/**
 * 选择排序
 * 复杂度 O(n * n)
 * @param arr
 * @returns {*}
 */
function selectionSort(arr) {
    let copy = arr.slice(0);

    for (let i = 0, len = copy.length; i < len; i++) {
        let out = copy[i];
        let j;
        let minIndex = i;
        let minValue = out;

        for (j = i + 1; j < len; j++) {
            let inner = copy[j];
            if (minValue > inner) {
                minIndex = j;
                minValue = inner;
            }
        }

        if (minIndex !== i) {
            let temp= copy[minIndex];
            copy[minIndex] = copy[i];
            copy[i] = temp;
        }
    }

    return copy;
}


let arr = [1, 90, 88, 100, 20, 3, 1];

let sort = selectionSort(arr);
console.log(sort);