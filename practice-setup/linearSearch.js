
// We store two or three values in memory with our parameters
// The space the array occupies in memory doesn't necessarily change linearly with its size
// Also because this isn't exclusive to our algorithm, we aren't going to be concerned
const linearSearch = (array, element, comparatorFn) => {
  let index = 0  // we store one value here
  for (const i of array) {  //create new const i for each loop, but we drop this after each iteration
    if (typeof element === 'object' && // temp booleans used in place (not permanent)
        element !== null &&
        comparatorFn(element, i)
      ){
          return index;
    }
    if (i === element) {
      return index
    }
    index++
  }
}

// Space complexity: O(1)

const arr = [5, 3, -10, 10, 33, 51]

const objects = [{"name": "Max", "age": 31}, {"name": "Sid", "age": 23}]

console.log(linearSearch(arr, 33))

console.log(linearSearch(objects, {"name": "Sid", "age": 23}, function (el, it) {
  console.log(it.name)
  return el.name === it.name
}))

// Fix this code's weird behavior later
