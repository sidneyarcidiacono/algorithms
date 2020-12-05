// ITERATIVE BINARY SEARCH

// Two items stored for parameters
const binarySearch = (arr, item) => {
  let startIndex = 0 // 1 - not dep. on input size
  let endIndex = arr.length - 1 // 2 - not dep. on input size

  while (startIndex <= endIndex) { //temp boolean
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2) // survives for the length of the loop only

    if (item === arr[middleIndex]) {
      return middleIndex
    }
    if (arr[middleIndex] < item) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
  }
}

// Binary search space complexity (iterative): O(1)

const array = [1, 5, 9, 13, 99, 100]

// RECURSIVE BINARY SEARCH

console.log(binarySearch(array, 99))

const binarySearch = (arr, item, offset) => {
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((endIndex - startIndex) / 2)

    if (item === arr[middleIndex]) {
      return middleIndex + offset
    }
    if (arr[middleIndex] < item) {
      startIndex = middleIndex + 1
      offset = offset + middleIndex + 1
    } else {
      endIndex = middleIndex
    }
    return binarySearch(arr.slice(startIndex, endIndex + 1), item, offset)
  }
}

// Binary search space complexity (recursive): O(log n) because we call ourselves log n times?

const array = [1, 5, 9, 13, 99, 100]

console.log(binarySearch(array, 99, 0))
