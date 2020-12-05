const sort = arr => {
  // copy the array so we don't mutate original
  const copiedArray = [...arr]

  // Define base condition
  if (copiedArray.length <= 1) {
    return copiedArray
  }

  // Declare different arrays to utilize for sorting ("chunks")
  const smallerElementsArray = []
  const biggerElementsArray = []
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]

  // Loop through copied array while its length is truthy
  // Push current element to corresponding array or "chunk"
  while (copiedArray.length) {
    const currentElement = copiedArray.shift()
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement)
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement)
    } else {
      biggerElementsArray.push(currentElement)
    }
  }
  // once we've completed our loop, we're going to do our recursive step
  // this is because we need to repeat these steps for our smaller and bigger elements
  // array until we're finished sorting
  const smallerElementsSortedArray = sort(smallerElementsArray)
  const biggerElementsSortedArray = sort(biggerElementsArray)

  // concatenate all arrays so what we return is one cohesive sorted array
  return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray)
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15])
console.log(sortedArray)

// Time complexity of recursive step: O(n)
// Time complexity outside recursive step: O(n)
// We have equal work inside and outside of recursion, so we use the master theorem
// to derive O(n^logb(a) * log n) which simplifies to O(n * log n)
