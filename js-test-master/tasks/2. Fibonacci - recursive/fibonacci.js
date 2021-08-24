let arr = []

export function getFibonacciUntil(n) {
  if (n != 2) {
    addIt()
    n--
    getFibonacciUntil(n)
  }
  return arr
}
var x = 0
var y = 1
arr.push(x)
arr.push(y)
function addIt() {
  var z = x + y
  x = y
  y = z
  arr.push(z)
}
