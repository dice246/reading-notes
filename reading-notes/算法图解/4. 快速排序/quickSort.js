/**
 * 快速排序
 * @param arr
 * @returns {[]|any[]|string|*}
 */
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let base = arr.splice(0, 1);
  let left = [];
  let right = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(base, quickSort(quickSort(right)))
}

console.log(quickSort([5,2,1,7,3,4]))
