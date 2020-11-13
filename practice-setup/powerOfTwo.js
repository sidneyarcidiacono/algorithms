// is power of two alrgorithm
// Determine whether an input is a power of two
// For example: 8 should return true (is 2^3) where 5 should return false
// Divide number and future results by two until 1 is reached and the remainder is either zero or not

// const isPowerOfTwo = num => {
//   if (num < 1) {
//     return false
//   }
//   let dividedNumber = num
//   while (dividedNumber !== 1) {
//     if (dividedNumber % 2 !== 0) {
//       return false
//     }
//     dividedNumber = dividedNumber / 2
//   }
//   return true
// }
//
// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwo(5))

// Best Case: something like # = 13, where it can't be divided by 2 even once => O(1)
// Average case: something like 1,000,000 where it can be divided by 2 a few times but still returns false eventually => O(log n)
// It doesn't grow linearly - for a number like 1,000,000 we would reach a relatively constant time complexity because, like in this
// example, we only divide 1,000,000 by two seven times before returning false
// Worst case: something like 2^50, a very large number that IS a power of two O(log 2 n) (which is basically O(log n))


// Bitwise magic!

const isPowerOfTwo = num => {
  if (num < 1) {
    return false
  }
  return (num & (num - 1)) === 0
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))

// We've now reduced the time complexity to O(1)
