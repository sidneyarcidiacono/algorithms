// KNAPSACK PROBLEM: LET'S LOOK AT IT DIFFERENTLY
// You could definitely solve this iteratively, but we're going to solve it
// recursively for our purposes. There are solutions online and things that do solve
// this iteratively that are worth taking a look at

const knapsack = (items, cap, itemIndex) => {
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 }
  }

  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1)
  }

  const sackWithItem = knapsack(items, cap - items[itemIndex].weight, itemIndex - 1)

  const sackWithoutItem = knapsack(items, cap, itemIndex - 1)

  const valueWithItem = sackWithItem.value + items[itemIndex].value
  const valueWithoutItem = sackWithoutItem.value

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight
    }
    return updatedSack
  } else {
    return sackWithoutItem
  }

  return {}
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
