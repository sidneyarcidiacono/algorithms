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
