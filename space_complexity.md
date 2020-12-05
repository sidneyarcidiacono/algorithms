# Space Complexity:

Typically, time complexity is the more important measure for performance. However, there's another dimension we use when we want to compare algorithms, and that's the space complexity.

## What is Space Complexity?

How much **space in memory** does your algorithm occupy?

Similarly to time complexity, we'll focus on the general trend.

All values in JavaScript are stored in memory. Especially objects and arrays can take up more space, so when we judge space complexity we'll focus on those. However, everything is stored in memory. Everything is also released from memory if it's not used anymore.

In JS we don't have to think about space complexity that much because JS engines and browsers are pretty adept at managing memory. For other languages, this may be more important.

### Deriving Space Complexity:

Find places in your algorithm where data (values) is stored "permanently" in your algorithm.

*Permanently of course is relative and referring to data surviving iterations of your algorithm rather than referring to data that will be stored forever*

Look out for values that survive multiple loop iterations or recursive steps in our algorithm.

Count how often such "permanently" created stored values are being created (and kept around).

Determine how the number of values depends on your "n" (input).

We use **big O notation** for space complexity as well. So, O(n), O(1), etc. exist for space complexity as well.

### Factorial Algorithm (iterative) - Space Complexity:

The general trend of the iterative factorial algorithm is O(1) (see description in code comments). This is because the permanent values stored don't depend on or change with our input size!

### Factorial Algorithm (recursive) - Space Complexity:

The general trend of the recursive factorial algorithm is O(n). This is because the value we're storing in our recursive function is our num parameter. Each successive function call stores a new num parameter due to the way recursion is handled on the call stack.

Because we call ourselves "n" times, this leads to our space complexity being O(n).

This is interesting to note, because if you recall, time complexity didn't change between the iterative and recursive factorial solutions. However, we can see that there is a difference in space complexity between the two solutions.

Depending on your use case, this might be a factor in choosing the iterative solution instead of the recursive solution. (Obviously this won't always be the case, it just depends on the situation).

### Linear Search - Space Complexity

Linear search has a constant space complexity O(1) - because the number of values in memory does not depend on "n" at all. See commented explanations in code for more specifics.

### Binary Search (iterative) - Space Complexity:

Space complexity O(1) for the same reason as linear search: permanent values stored don't change with the size of our input.

### Binary Search (recursive) - Space Complexity:

Space complexity for recursive binary search should be approx. O(log n) because we call ourselves log n times.

### Bubble Sort - Space Complexity:

For the same reasons as before (permanent data stored doesn't change w n): O(1)

### Quicksort - Space Complexity:
