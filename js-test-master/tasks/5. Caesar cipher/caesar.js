export function encryptCaesar(inputString, key) {
  var arr = new Array(inputString.length)
  var newString = ''

  for (var i = 0; i < inputString.length; i++) {
    arr[i] = inputString.charCodeAt(i)
    arr[i] = arr[i] + key

    if (arr[i] > 90) {
      arr[i] = arr[i] - 26
    }

    arr[i] = String.fromCharCode(arr[i])
    newString = newString + arr[i]
  }

  return newString
}

//The encoding function could be used to decode the message in the same way we encrypted it.
//Instead of adding the value to the ASCII codes, reduce it by the key value and if it falls below 65,
//add 26 to it.

//Incase we do not have the key, one approach could be the brute force, we will have 26 messages and most
//probably only one of the message would come out with a meaning.
//OR
//Frequency Analysis Approach. We could Use this approach by subtracting the second most frequently used
//letter in the message and subtracting it from 'E' and that would be our key.
