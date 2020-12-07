// KNAPSACK PROBLEM: LET'S LOOK AT IT DIFFERENTLY
// You could definitely solve this iteratively, but we're going to solve it
// recursively for our purposes. There are solutions online and things that do solve
// this iteratively that are worth taking a look at

const knapsackFn = (items, cap, itemIndex, memo) => {
  if (memo[cap][itemIndex]) {
    return memo[cap][itemIndex]
  }
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 }
  }

  if (cap < items[itemIndex].weight) {
    return knapsackFn(items, cap, itemIndex - 1, memo)
  }

  const sackWithItem = knapsackFn(items, cap - items[itemIndex].weight, itemIndex - 1, memo)

  const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1, memo)

  const valueWithItem = sackWithItem.value + items[itemIndex].value
  const valueWithoutItem = sackWithoutItem.value

  let resultSack

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight
    }
    resultSack = updatedSack
  } else {
    resultSack = sackWithoutItem
  }
  memo[cap][itemIndex] = resultSack
  return resultSack
}

const knapsack = (items, cap, index) => {
  const mem = Array.from(Array(cap + 1), () =>
  Array(items.length).fill(undefined)
)
  return knapsackFn(items, cap, index, mem)
}

const items = [
  {name: 'a', value: 3, weight: 3},
  {name: 'b', value: 6, weight: 8},
  {name: 'c', value: 10, weight: 3}
]

const maxCap = 8

// I would prefer to use a default argument for our first call than pass the last index in as an argument
// to our first function call, but I can rework this later
const fullKnapsack = knapsack(items, maxCap, items.length - 1)
console.log(fullKnapsack)
