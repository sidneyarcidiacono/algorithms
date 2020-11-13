// is power of two alrgorithm
// Determine whether an input is a power of two
// For example: 8 should return true (is 2^3) where 5 should return false
// Divide number and future results by two until 1 is reached and the remainder is either zero or not

const isPowerOfTwo = num => {
  if (num < 1) {
    return false
  }
  let dividedNumber = numbers
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false
    }
    dividedNumber = dividedNumber / 2
  }
  return true
}

console.log(isPowerofTwo(8))
console.log(isPowerofTwo(5))
