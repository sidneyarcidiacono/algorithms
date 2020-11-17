# Recursion & Dynamic Programming

### What is Recursion?

Recursion is all about calling a function within itself.

*If you call a function within that same function, we're talking about recursion*

### Recursion in algorithms (and why it's not always better)

Recursion is not always best. Let's evaluate the recursive solution of the fibonacci sequence algorithm.

```javascript
// The fibonacci sequence:

// RECURSIVE solution:

const fib = n => {
  if (n <= 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}
```

The time complexity here is no longer O(n), but exponentially increasing as we increase n.

This is greater than O(n^2), but instead, we're increasing exponentially (to a higher exponent) or O(2 ^ n)

For each execution, we start two new function executions. This means that we very quickly have many many more function calls.


### Dynamic programming

Combining recursion w/ stored data: memoization

Recursion can be great for repeated computations, but can lead to duplicate work.

Avoid unnecessasry recursive steps by storing data:

  - Intermediate results are stored and re-used

  - Eliminate extra functions calls and therefore whole branches of this "recursive tree" to help optimize the recursion process.


### Bottom-up Approach:

What we did with our iterative solution

Can also consider a bottom up approach recursion with memoization 

### The Master Theorem:

How do you derive Big O for complex recursive functions?

In our recursive binary search algorithm, we're still going to have O(log n) - but how do we calculate that?

Runtime of recursion: O(n ^ log b a)

    - a = number of subproblems (number of recursion splits)
    - b = relative subproblem size (input reduction per split)
    - f(n) = runtime outside of recursion

Overall algorithm runtime complexity - three cases:

1. Recursion does more work: O(n ^ log b a)
2. Same work inside and outside of recursion: O(n ^ log b a log n)
3. Non recursive part does more work (rare): O(fn(n))

So for our recursive binary search algorithm:

```javascript
const binarySearch = (arr, item, offset) => {
  // O(1)
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((endIndex - startIndex) / 2)

    if (item === arr[middleIndex]) {
      return middleIndex + offset
    }
    if (arr[middleIndex] < item) {
      startIndex = middleIndex + 1
      offset = offset + middleIndex + 1
    } else {
      endIndex = middleIndex
    }
    // This line is O(1)
    return binarySearch(arr.slice(startIndex, endIndex + 1), item, offset) // We call ourselves once here. a = 1 & we split our array in half, so b = 2 (the number by which we divide)
  }
}

// That gives us: O(n ^ logb a) = O(n ^ log2 1) => O(n ^ 0) => O(1)
// Overall algorithm complexity for this then is: O(n ^ logb a * log n) so we have O(1) * log n or O(log n)


const array = [1, 5, 9, 13, 99, 100]

console.log(binarySearch(array, 99, 0))
```
