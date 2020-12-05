const sort = arr => {
  // Set our two base conditions.
  if (arr.length < 2) {
    return arr
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
  }
  const middle = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, middle)
  const rightArray = arr.slice(middle)

  const leftSortedArray = sort(leftArray)
  const rightSortedArray = sort(rightArray)

  const mergedArr = []
  let leftArrIndex = 0
  let rightArrIndex = 0
  while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {
    if (leftArrIndex >= leftSortedArray.length|| leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
      mergedArr.push(rightSortedArray[rightArrIndex])
      rightArrIndex++
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex])
      leftArrIndex++
    }
  }

  return mergedArr
}

// Recursive step time complexity: O(n ^ logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Outside time complexity: O(n)
// Overall time complexity can be derived using the Master theorem, where we have the
// same work inside and outside of the recursion, so we have O(n * log n)

const sortedArray = sort([-10, 33, 5, 10, 3, -19, 99])

console.log(sortedArray)
