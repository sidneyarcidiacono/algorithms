const binarySearch = (arr, item) => {
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

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

const array = [1, 5, 9, 13, 99, 100]

console.log(binarySearch(array, 99))
