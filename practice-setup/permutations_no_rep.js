//  PERMUTATIONS WITHOUT REPETITION

const getPermutations = (options) => {
  const permutations = []

  if (options.length === 1) {
    return [options]
  }

  const partialPermutations = getPermutations(options.slice(1)) // Recursive call is going to occur n times (n - 1 but we'll generalize)
  //  [['order food']] <= at some point this will contain an array with just one option

  const firstOption = options[0]

  for (let i = 0; i < partialPermutations.length; i++) { // this runs on n - 1 items in its "worst case"
    const partialPermutation = partialPermutations[i]

    for (let j = 0; j <= partialPermutation.length; j++) { //this runs on n - 1 items in its worst case
      const permutationInFront = partialPermutation.slice(0, j)
      const permutationAfter = partialPermutation.slice(j)
      permutations.push(permutationInFront.concat([firstOption], permutationAfter))
    }
  }

  return permutations
}

const todoListItems = ['Walk the dog', 'clean the toilet', 'buy groceries', 'order food']

console.log(getPermutations(todoListItems))

// Time Complexity: this one you kind of have to log out the calls and results, but this is actually factorial time complexity O(n!)
