// Factorial algorithm

// Calculate the factorial of a number - go through all smaller numbers of a given number and multiply them together
// So for 5, 5 * 4 * 3 * 2 * 1 and so on

// our parameter num is being stored in memory (1)
const factorial = num => {
  let result = 1  //then we store result (2)
  for (let i = 2; i <= num; i++) {  //here we store i which gets a new value with each iteration (don't survive iterations)
    result *= i //update with result every iteration (no new permanent data)
  }
  return result
}

// Space complexity of iterative factorial is O(1) - the space in memory that we occupy does not depend on the input size

console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(10))

// This is simply O(n)

// We take in our num as a parameter, so that's one piece of data stored
const recur_factorial = num => {
  if (num === 1) {
    return 1
  }
  return num * recur_factorial(num - 1) // because num is updated with each call and the # calls depends on input, maybe storage does as well?
}

// What's the space complexity for the recursive algorithm?
// My hunch was correct: each new function call creates a new number in memory that needs to be stored
// So for recursive space complexity: O(n)

console.log(recur_factorial(3))
console.log(recur_factorial(4))
console.log(recur_factorial(5))

// In every function call, we have O(1), but we have n function calls or O(n)

// So we don't improve the time complexity, but we have less code, which could be a deciding factor in this solution
// versus an iterative solution
