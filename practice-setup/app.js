// GREEDY START TO THE CHANGE MAKING PROBLEM

const computeChange = (coins, amount) => {
  let remainingAmount = amount

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  }

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin)
    calculatedChange[coin] = count
    calculatedChange.numberOfCoins += count
    remainingAmount = remainingAmount - coin * count
  }

  return calculatedChange
}

// THE HARDER CHANGE MAKING PROBLEM

const computeChangeBruteForce = (coins, amount) => {
  const results = []
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount))
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER
  let finalResult
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins
      finalResult = result
    }
  }
  return finalResult
}

const coins = [100, 50, 20, 10, 5, 2, 1]
const randomCoins = [8, 6, 5, 1]
const targetAmount = 30

const change = computeChange(coins, targetAmount)
console.log('change from first approach:' + change)

const makeChange = computeChangeBruteForce(randomCoins, targetAmount)
console.log('Make change from bf approach' + makeChange)
