# Complex Algorithms

## A Structured Problem Solving Approach

There is no one way to solve problems, but these are tips to remember for general problem solving & developing algorithms. Even if the first algorithm or solution developed isn't the best one, finding a solution that works is the first step to then iterating on and improving that solution.

1. Verify the problem & the problem inputs.

    - e.g is an array of fixed length, does order matter, etc.

2. Think about the problem and derive a verbal solution. (think loudly)

    - This doesn't need to be the final or best solution possible
    - Experience & practicing helps here!

3. Write down a first version (e.g in pseudo-code)

4. Derive time complexity and see if you can improve your solution to do better.

    - Then, go iterate on your initial solution and improve it if possible and so on.

### Simplifying Problems:

Ways of simplifying a problem:

  - Split into smaller sub-problems
      - e.g split arrays into chunks,
      - possibly combined with recursion, but this doesn't always work obviously

  - use print, console.log() etc. to verify what's in your temporary variables
      - This is absolutely fine, also in interviews!
      - Let your interviewer or team know why you're doing this

  - Use helper variables (e.g helper arrays to store intermediate results)
      - Don't worry initially about writing long code or inline code or about space complexity too much, focus on writing readable and understandable code. Especially your first solution, and especially in interview situations. You can always make your solution better and prettier if you're either prompted or if you have time and want to.

### The Knapsack Problem:

You got a list of items, where every item has a value and a weight. You have a bag that holds a maximum weight of x.

Write a program that maximizes the value of the items you put into the bag whilst ensuring you don't exceed the maximum weight.

ex:

items = [
  {id: 'a', val: 3, w: 3}
  {id: 'b', val: 6, w: 8}
  {id: 'c', val: 10, w: 3}
]

maxWeight = 8

bag = ['a', 'c'] //solution

**Step 1:**

*Verify inputs: can items be used multiple times?*

We're going to assume first that we can't repeat items.

**Step 2:**

*Derive a first (verbal) solution.*

We could combine all possible combinations and find the one with highest value and fitting weight.

**Looking at the problem differently**

We looked at our permutations algorithm and console logged the result of calling it on our items just to see if it made sense. Because permutations returns the same items just in a different order each time, we decided that this algorithm doesn't really make sense for our use case, and didn't move forward with modifying it.

This is a good example of the first solution or the first kind of intuition isn't always correct, and that's okay. This is why it's important to look at your first thoughts and solutions and evaluate if they seem to be making sense before moving ahead and spending a lot of time on a solution that doesn't make much sense.

*What now?*

Now, we're going to look at the problem a bit differently.

For items a, b, and c, let's first look at one item: c.

We have two options: keep, or not keep?

    If c exceeds our given weight threshold, we automatically discard it.
    Then, given that we want to achieve the maximum value, what else do we need to do?

    Well, what if we write some code to execute in the case that we keep c, and in the case that we don't. Let's move to b for now.

    We'll look at b, and decide to include it, or not include it, based on either including or not including c.

    Then, we repeat this for all items. We look at all possible scenarios and create a "decision tree" accordingly.

**What's the time complexity of our first real solution?**

In our worst case, we have two nested recursive calls. We learned in the fibonacci solution that this gives us exponential time complexity, but also that we can optimize this.

Let's look at our original solution and try to optimize it with memoization to fix this O(2^n) time complexity.

**After memoization**:

So, what's our new time complexity?

Now, we have O(n*c) where c is our capacity. This is because we depend on our knapsack's capacity as well as our input because with a larger capacity, we have more options we need to evaluate.

### Greedy vs. Dynamic Algorithms:

**Greedy**:

An algorithm where you try to make the best possible decision in every step and hope that it leads to the overall best solution. Greedy algorithms are often faster to set up and come up with, but they don't necessarily provide the best runtime and/or result.

**Dynamic Algorithms**:

An algorithm where you're most likely using memoization, because you evaluate all possible solutions and find overall best solution via comparison.

When using dynamic algorithms or dynamic programming, you're often using a "divide and conquer" approach: dividing the problem into smaller, easier to solve subproblems.

Writing these can be a bit more complex, because you have to split up the problem and really consider all approaches.

*So*

It's not a bad idea to try greedy approaches. Just be open to optimizing and changing these around.

### Final Problem Solving Plan:

1. Verify Inputs/Problem

2. Think about Problem & Verbal solution

3. Write down a first version

    Maybe go with a simple, greedy approach first

4. Verify the results - test with edge cases & different inputs

5. Derive time complexity

6. Explore alternative approaches & look for improvement & improvement potential

### The Change Making Problem:

You have an array of *available coins*, i.e:

[100, 50, 20, 10, 5, 2, 1 ] where "100" is one dollar

You have a *target value*, i.e:

129

Write an algorithm that returns the coins and the number of each coin that gets to the target value - using the least amount of coins.

We're going to tackle this problem using our plan.

1. Verify inputs:

    Is this a static array of coins, (should we always expect the input I demonstrated above?) or should we be able to take any input?

    Are the coins always ordered?

    Do we need an exact solution, or should we round to use fewer coins?

    *For now, let's assume the inputs are ordered and stable*

2. Think about problem & verbal solutions

    Greedy approach first: go through all coins and decide for each if it should be used.

3. Write down our first version (our greedy approach)

4. Derive time complexity

    What is the time complexity of this approach?

    Currently, this is O(n) where n is the length of our coins array

    Can we do better? We can slightly optimize by checking if coins are less than our given target, but it won't make a huge difference.

    For this problem with our static coins array, linear is the best we  can do. We can also argue that since the coins array in our example is set in stone, this is technically constant time. However, for my own purposes I'm going to say that this might be flexible and say linear time.
