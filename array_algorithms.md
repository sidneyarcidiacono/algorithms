# Sets (Array) Algorithm

## Getting Tricky


### What are Set (Array) Algorithms About?

A set is a **collection of values** (objects, numbers) which forms an **entity itself**

You can commonly use arrays and sets interchangeably because most arrays are sets. You rarely have arrays of unconnected or random data.

### The Cartesian Product Algorithm:

For two sets, we want to get all of the possible combinations of those two sets. For example, if we have a clothing store,

setA is colors for a product: ['red', 'blue']

and setB are the sizes: ['s', 'm', 'l'],

We want to be able to derive [['s', 'red'], ['s', 'blue']...] and so on, so that we obtain a list which contains nested lists of all of the combinations of our two sets.

### The Cartesian Product Algorithm Time Complexity:

Big O for this currently is going to be O(n * m) because although we have nested loops, we're running each loop on a separate input or a separate set.

We also have the limitation that currently we can only take two sets as input. They don't have to be the same size, but we can only ever derive the Cartesian Product of two sets.

We could actually argue for quadratic time and space complexity here if we want to consider the worst case and assume that the length of the longest array is the length of both arrays without differentiating.

### Cartesian Product (Without Limits) Time Complexity:

We're going to assume that the length of the longest array we're given is the length of all of the arrays (to generalize the worst case scenario).

Our worst case generalization also includes the amount of arrays we have : so our time complexity if we don't know the number of arrays is going to be O(n^x) where x is the number of sets we're getting.

It's the same for the space complexity: O(n^x).
