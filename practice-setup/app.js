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

const coins = [100, 50, 20, 10, 5, 2, 1]
const targetAmount = 50

const change = computeChange(coins, targetAmount)
console.log(change)
