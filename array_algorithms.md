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

### Permutations (With and Without Repetition):

**Permutations: an ordered combination of values**

Can be:

- With repetition:

    - Ex: safe combination you want to set
    - [1, 5, 9] available

      [1, 1, 9]
      [1, 1, 1]
      [9, 5, 9]

- Without repetition:

    - ex: todo list items
    1. Walk the dog
    2. Clean the toilet
    3. Order foot

    - There are a bunch of different combinations and every task is only done once.

Two combinations in different orders are treated as different combinations.

We want to write an algorithm that can take a set of options and give us all of the combinations possible.

**Recursive Permutations**

Take our input array of options [A, B, C, D] => main function call

1. Recursive step => [B, C, D]

2. Recursive step => [C, D]

3. Recursive step => [D]

Write some code to combine this single element with every other element in the array in differing combinations.

By splitting this problem into smaller arrays, we can use a loop since now we don't need to have an unknown amount of inner arrays. (Avoids nested loop issue.)

**So what's the time complexity of our recursive permutation algorithm?**

This actually has factorial time: O(n!). If you run this and console log the output, you can see that with 4 input items we return 24 results and with 5 input items we return 120 results. This grows even faster than exponential time!

This is due to the way that we derive permutations:

4 combinations has 4 * 3 * 2 * 1 combinations
5 combinations has 5 * 4 * 3 * 2 * 1 combinations

You unfortunately won't find an algorithm that does better. There are ways to write this differently, but if you have to derive all of these combinations, you will have factorial time complexity.

### Permutations with Repetition:

We have very similar logic to our non repetitive permutations algorithm.

**Time Complexity**:

We still don't do better than factorial time here, since we have more possible combinations. However, now, both our input options and our length impact how long our algorithm takes to run.

O(n^r) => where n is the number of options and r is the length that we provide.

*How do we derive this?*

We know that typically if we have nested loops we're going to have quadratic time. However, since we take two inputs and can easily tell that both inputs have a strong impact on the amount of results we're provided, this is a strong indication that both inputs have an impact on our time complexity.

To find out how our inputs are related, we can simplify our inputs and run our code.

Ex: if we give our algorithm:

[1, 2] and length 2, we get 4 combinations.

[1, 2, 3, 4] and length 2, we get 16 combinations.

[1, 2, 3] and length 3, we get 27 combinations.

Which we can very clearly see demonstrate that our algorithm is running at (n^r) rather than the other way around or on simply quadratic or factorial time, for example. 
