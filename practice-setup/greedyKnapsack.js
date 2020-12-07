// GREEDY KNAPSACK APPROACH

const knapsack = (elements, capacity) => {
  const sack = {items: [], value: 0, weight: 0}
  let remainingCapacity = capacity

  for (const element of elements) {
    if (element.weight <= remainingCapacity) {
      sack.items.push(element)
      sack.value += element.value;
      sack.weight += element.weight
      remainingCapacity -= element.weight
    }
  }

  return sack
}

const items = [
  {name: 'a', value: 3, weight: 3},
  {name: 'b', value: 6, weight: 8},
  {name: 'c', value: 10, weight: 3}
]

const maxCap = 8

const fullSack = knapsack(items, maxCap)
console.log(fullSack)

// This greedy approach gives you the right answer for these inputs, but if you switch a and b's positions
// in the list, it no longer gives the correct result.

// This is a misleading result that doesn't work for all inputs

// 0-1 Knapsack Problem (where you can only choose one item or not choose it)
