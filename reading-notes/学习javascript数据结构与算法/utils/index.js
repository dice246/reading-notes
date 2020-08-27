const compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? compare.LESS_THAN : compare.BIGGER_THAN
}

module.exports = {
  compare,
  defaultCompare
}
