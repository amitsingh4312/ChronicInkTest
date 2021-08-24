let sum = 0

export function Reduce(array, reducer, initialValue) {
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[1] == Number)) {
      sum += array[i]
    } else {
      sum1 += array[i]
    }
  }

  if (typeof (array[1] == Number)) {
    return sum
  } else {
    return sum1
  }
}
sum = 0
