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

const array = [1, 5, 9, 13, 99, 100]

console.log(binarySearch(array, 99, 0))
