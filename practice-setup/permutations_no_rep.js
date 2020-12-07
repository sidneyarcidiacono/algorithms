//  PERMUTATIONS WITHOUT REPETITION

const getPermutations = (options) => {
  // Initialize our permutations array
  // This is going to be an array of arrays in the end
  const permutations = []

  // Set our base condition so that we stop calling ourselves
  // Since we're slicing our options array, we see if that array is
  // down to a length of one, at which time we return it as an array
  // we return it as an array, becasue we want to make sure we're returning
  // the same types of data throughout
  if (options.length === 1) {
    return [options]
  }

  // here we do our slicing so that we can separate our options
  const partialPermutations = getPermutations(options.slice(1))
  //  [['order food']] <= at some point this will contain an array with just one option

  // We grab the first option in our array
  // we use this to then recombine all of the separate combinations
  const firstOption = options[0]

  // Our outer for loop runs through the length of partial permutations (our slice from above)
  // Then, we set a partial permutation to be the index that we're stepping into at that iteration
  // of the loop (i, which is declared inside our loop and which is our iterator)
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i]

    // Out innter loop initializes iterator j and runs through the length of partial permutation
    // which we declared in our outer loop. To derive different combinations, we initialize "inFront" and "after"
    // Then, we push our permutations in front and after arrays to get our final array of arrays
    for (let j = 0; j <= partialPermutation.length; j++) {
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
