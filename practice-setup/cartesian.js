// CARTESIAN PRODUCT ORIGINAL

// const cartProduct = (setA, setB) => {
   // We're going to assume we always get a valid set with inputs
  // so we're going to omit an if check to see if we have valid arrays.
//
//   const product = []
//
//   for (const setAEl of setA) {
//     for (const setBEl of setB) {
//       product.push([setAEl, setBEl])
//     }
//   }
//
//   return product
// }
//
//
// const colors = ['blue', 'red']
// const sizes = ['s', 'm', 'l']
// console.log(cartProduct(colors, sizes)) // [[blue, m], ...]

// Big O for this currently is going to be O(n * m) because although we have nested loops, we're running each loop on a separate input or a separate set.
// Space Complexity: going to be O(n*m) because we create one new value which is stored in the product array per each combination of our two sets.

// We could argue for both space and time complexity to be quadratic if we want to consider the worst case
// and assume that the length of the longest array is the length of both arrays without differentiating.

// CARTESIAN PRODUCT WITHOUT LIMITS

const cartProduct = (setA, setB) => {
  // We're going to assume we always get a valid set with inputs
  // so we're going to omit an if check to see if we have valid arrays.

  const product = []

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl]
    }
    for (const setBEl of setB) {
      product.push([...setAEl, setBEl])
    }
  }

  return product
}

const cartesian = (...sets) => {
  let tempProduct = sets[0]

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i])
  }

  return tempProduct
}

const colors = ['blue', 'red']
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck']
console.log(cartesian(colors, sizes, styles)) // [[blue, m], ...]
