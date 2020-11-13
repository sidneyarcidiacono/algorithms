// The fibonacci sequence:

// RECURSIVE solution:

// We don't calculate this currently in the course, but it doesn't do better

// const fib = n => {
//   if (n <= 1) {
//     return n
//   } else {
//     return fib(n - 1) + fib(n - 2)
//   }
// }

// ITERATIVE solution (unfinished):

// Time complexity: O(n - 1) which is basically O(n) => so we call this linear time complexity

const fibIt = n => {
  let sequence = [0, 1, 1]

  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1])
  }
  return sequence[n]
}

console.log(fibIt(10))

// Recursive fibonacci with memoization:


// First, add an additional parameter called memo
// We don't want to define this globally and get unintended behavior
const fib = (n, memo) => {
  // create a helper variable called result
  let result
  // check if memo exists for this n key: if it doesn't it'll return undefined and we
  // never make it in this "if" block
  if (memo[n]) {
    // If we do have memory for this "n", we're going to return this result.
    // this is our optimization
    return memo[n]
  }
  if (n <= 1) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result
  // return result rather than directly returning function calls
  // this enables us to do like above where we return memo rather than
  // calling nested function calls when we don't need to
  return result
}

fib(5, {})
fib(5, {})

// This DRAMATICALLY improves our time complexity to O(n) rather than exponential time.s
