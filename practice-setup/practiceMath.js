// Practice!

// First algorithm: takes array of numbers as input and returns the smallest number in the array

const findMin = array => {
  let currentMin = array[0]
  for (i of array) {
    if (i < currentMin) {
      currentMin = i
    }
  }
  return currentMin
}

console.log(findMin([1, 2, 3, 10, 12, -1]))

// Best Case: Smallest number is the first number, so we never make it into the if check => O(n)
// Average Case: Random order: we don't know how many times it makes it into the if check => O(n)
// Worst Case: Inverse order: we make it into the if statement in the loop each time => O(n)

// So this is O(n) in any case, because even though our if case is executed or not, we really just care about the loop
// iterations

// Second algorithm: takes one number as input & returns true if even and false if odd

const evenOrOdd = num => {
  return num % 2 === 0
}

console.log(evenOrOdd(4))
console.log(evenOrOdd(11))

// This has a time complexity of O(1) or constant time, because no matter how large of an input its given,
// it only needs to execute the same line of code.
