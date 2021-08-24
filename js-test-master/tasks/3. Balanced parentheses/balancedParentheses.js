export function areParenthesesBalanced(inputString) {
  let count = 0
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] == '(') {
      count++
    } else if (inputString[i] == ')') {
      count--
      if (count < 0) {
        return false
      }
    }
  }
  if (count == 0) {
    return true
  } else {
    return false
  }
}
