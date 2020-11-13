# Algorithms - Getting Started

## Deriving the Time Complexity (Big O) of an algorithm

### Asymptotic Analysis:

1. Define the function:

  This function is defined by stepping through the function and determining that for input n, how many times is each line of code executed

  For this example:

  ```javascript
  function sumUp(n) {
    let result = 0 //runs once no matter what
    for (let i = 1; i <= n; i++) { //runs once no matter what
      result += i //runs n times
    }
    return result // runs once no matter what
  }
  ```

  The function is T = 3 + 1 * n or T = a * n + b

  While for the following:

  ```javascript
  function sumUp(n) {
    return ( n / 2 ) * ( n + 1) // Runs once NO MATTER WHAT
  }
  ```

  The function is just T = 1

2. Find the fastest growing term

   In the first example, the fastest growing term is a * n, because as n increases, this term will increase. B is a constant coefficient that never changes.

   In the second example, there is no growing term.

3. Remove the coefficient

   In the first example, since b is the coefficient, we'll drop that to get: T = a * n

   In the second example, there is no coefficient.

4. So now we look at the general trend.

   T = 1 just becomes O(1)

   T = a*n becomes just T = n or O(n)

   We really just care about what's going to change the performance measurably.

### Using Big O To Compare Algorithms:

Comparison:

 - O(1) - n (number of input) has no effect on how long the algorithm takes
 - O(n) - execution time grows linearly with n

Therefore, we can see that O(n) is *worse* than O(1). However, you won't always be able to find an O(1) time complexity

- O(log n) - Initially slower than linear time, but can be faster with larger inputs. Execution time grows logarithmically with n
- O(n^2) - Quadratic time complexity: grows quadratically with n

- O(2^n) - Exponential time complexity: even slower than quadratic time complexity (grows exponentially for n)


### Big O: Best Case, Average Case, Worst Case:

 - For some problems (e.g, sorting array items) you have *different cases* with different time complexities.

   Example: sort the numbers in the array from small to big. Algorithm used: bubble sort (covered later)

   **Best Case**: Already sorted: O(n)
   **Worst Case**: Inverse order: O(n^2)
   **Avg Case**: Random order: O(n^2)

So typically in interviews or even in real world problems you'll discuss the worst and best case of an algorithm. Average case is a bit strange because it's harder to quantify and is often derived from the worst case scenario.

We'll mostly focus on the worst case. This is what really matters: plan for the worst, hope for the best type of thing.


#### So in the isPrime example:

We have a few different cases because we check a conditional prior to the for loop. The best case is actually constant time complexity - if n is 1 or 2, the loop never runs.

Our *average* case is something like any larger number for which the loop will run for a few numbers smaller than it and then return false. This is still O(n), by the way, even if the loop doesn't execute for every single number.

Our worst case is a very large prime number for which the loop will run for every subsequent smaller number and never return our of the for loop until it reaches n, at which time it will return true.

**isPrime improvement notes**:

  - Every number that's NOT a prime has a product that consists of two numbers a & b that are neither one or the number itself
    ex: 3 * 3 = 9

  - At least one factor is smaller or equal to the square root of the number
    In this case, 3 and 3 are both equal to the square root of 9.

  - See the improved algorithm in prime.js: we've improved the time complexity from O(n) to O(sqrt(n)) by leveraging this simple math principle


### Identifying Big O Quickly:

We're really only interested in the Asymptotic analysis of an algorithm: we don't really care about the specifics, just the general trend.

You should be able to see the general trend just looking at an algorithm without counting executions and so on.

Couple of rules to consider:

1. Look for (single) loops (O(n))
2. Nested loops are a hint towards quadratic time complexity
3. Algorithm without other function calls inside of it and without loops, you're most likely dealing with constant time complexity

Single loops are most likely going to be linear time complexity, but you can take a closer look to see if you can get more specific (like in our isPrime example, we were able to deduce O(sqrt(n)) which is a bit more specific)

Check exit conditions, analyze the loop.
