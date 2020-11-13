// IsPrime problem: check if a number is prime or not. It should return True if prime and False if not IsPrime

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  return true
  }
}

console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(12))


// The time complexity of this is O(n) because the loop we can say at worst case will run for all numbers
// However, it's true that the loop doesn't actually always run for all numbers.
// Best case, this is actually O(1) for n = 1

// Let's improve this Algorithm

const isPrimeTwo = n => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  return true
  }
}

console.log(isPrimeTwo(5))
console.log(isPrimeTwo(4))

// This uses basic math principles to improve the worst case time complexity O(n) to O(sqrt(n))
