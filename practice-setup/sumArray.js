// Write an algorithm that takes an array of numbers as input and calculates the sum of those numbers
// Determine the Time Complexity of that algorithm and determine what the lowest possible Time Complexity is for this problem

const sumArray = array => {
  return array.reduce((a, b) => a + b)
}

console.log(sumArray([4, 3, 2, 1]))
console.log(sumArray([1, 2, 3, 6, 10]))

// This solution has an O(n) time complexity because .reduce executes for each item in the array (n)
// In other words, it still needs a loop and still gives us linear time Complexity
