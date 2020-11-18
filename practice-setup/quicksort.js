const sort = arr => {
  const copiedArray = [...arr]

  if (copiedArray.length <= 1) {
    return copiedArray
  }

  const smallerElementsArray = []
  const biggerElementsArray = []
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]

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

  const smallerElementsSortedArray = sort(smallerElementsArray)
  const biggerElementsSortedArray = sort(biggerElementsArray)

  return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray)
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15])
console.log(sortedArray)
