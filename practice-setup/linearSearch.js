const linearSearch = (array, element, comparatorFn) => {
  let index = 0
  for (i of array) {
    if (typeof element === 'object' &&
        element !== null &&
        comparatorFn(element, i)) {

    }
    if (i === element) {
      return index
    }
    index++
  }
}


const arr = [5, 3, -10, 10, 33, 51]

const objects = [{"name": "Max", "age": 31}, {"name": "Sid", "age": 23}]

console.log(linearSearch(arr, 33))

console.log(linearSearch(objects, {"name": "Sid", "age": 23}, function (el, it) {
  console.log(it.name)
  return el.name === it.name
}))

// Fix this code's weird behavior later 
