export function getFizzBuzzUntil(n) {
  var num = new Array()

  for (var i = 0; i <= n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      num[i] = 'FizzBuzz'
    } else if ((i + 1) % 3 == 0) {
      num[i] = 'Fizz'
    } else if ((i + 1) % 5 == 0) {
      num[i] = 'Buzz'
    } else {
      num[i] = i
    }
  }

  return num
}
