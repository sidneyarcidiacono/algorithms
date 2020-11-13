// The fibonacci sequence:

// RECURSIVE solution:

// We don't calculate this currently in the course, but it doesn't do better

const fib = n => {
  if (n <= 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

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
