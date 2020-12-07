// PERMUTATIONS WITH REPETITION

// Super similar logic to our "without repetition" version.
// This one needs to take a length so that we don't run infinitely
// since allowing repetition ensures an infinite amount of possibilities
// if we don't set our desired result length
const getPermutations = (options, length) => {
  // Initialize our final array
  const permutations = []

  // Set our base case. Since we provide the length and decrease it each function call,
  // this is what we check for our base case
  if (length === 1) {
    // we still want to return an array of arrays
    // we never slice options though, so we map this instead
    // of just wrapping in brackets
    return options.map(option => [option])
  }

  // Initialize partial permutations to the recursive call with length decremented
  const partialPermutations = getPermutations(options, length - 1)
  // [[1], [2], [3]]

  // Use regular rather than iterative for loops
  // Iterate through item in options list
  for (const option of options) {
    // Iterate through the current permutation of the result of our recursive call
    for (const existingPermutation of partialPermutations) {
      // push and concatenate (option) arrays
      permutations.push([option].concat(existingPermutation))
    }
  }

  return permutations
}

const digits = [1, 2, 3, 4]
const resultLength = 3

console.log(getPermutations(digits, resultLength))
