// Factorial algorithm

// Calculate the factorial of a number - go through all smaller numbers of a given number and multiply them together
// So for 5, 5 * 4 * 3 * 2 * 1 and so on


const factorial = num => {
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
}

console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(10))

// This is simply O(n)

const recur_factorial = num => {
  if (num === 1) {
    return 1
  }
  return num * recur_factorial(num - 1)
}

console.log(recur_factorial(3))
console.log(recur_factorial(4))
console.log(recur_factorial(5))

// In every function call, we have O(1), but we have n function calls or O(n)

// So we don't improve the time complexity, but we have less code, which could be a deciding factor in this solution
// versus an iterative solution
