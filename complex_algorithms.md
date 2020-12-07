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

Let's look at our original solution and try to optimize it with memoization.
