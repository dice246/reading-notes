const Queue = require('./Queue');

/**
 * 击鼓传花
 */
function hotPotato(arr, num) {
  const queue = new Queue();
  const eliminatedList = [];

  arr.forEach(item => queue.enqueue(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminatedList,
    winner: queue.dequeue()
  }
}

let arr = ['小明', '小白', '小红', '小子', '小胡子'];

console.log(hotPotato(arr, 2));
