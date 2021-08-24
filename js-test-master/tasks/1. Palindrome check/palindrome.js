export function isPalindrome(inputString) {
  function reverseStr(str) {
    return str.split('').reverse().join('')
  }
  var rev = reverseStr(inputString)

  if (rev != inputString) {
    return false
  } else {
    return true
  }
}
