# Sorting Algorithms

## What is "Sorting"?

Taking an unordered array and returning a new array that is in the order we want.

**Goal: sort items -- for example, to then apply search algorithms**

### Bubble Sort - Theory:

Easiest or simplest sorting algorithm you can really come up with.

**Compare two items at a time** and sort them. Go **through the entire array multiple times** until all pairs were compared and sorted.

in [3, 10, -3, 48, 5, 33, 99] we would check 3 and 10

Are they in the right order? We want it in ascending order, so yes.

Then, we would compare 3 and -3. Is the first greater than the third? Yes, so we swap.

Now we have [-3, 10, 3, 48, 5, 33, 99]

We're going to now compare -3 to 48. Are they in the right order? Yes. We move on.

Then we go through and check -3 against 5, 33, and 99 and see that nothing needs to change.

Now we're going to go through and compare our second item (10) to everything else after it.

When looking at 10 and 3, we notice that they're going to need to be swapped.

Now, our array is: [-3, 3, 10, 48, 5, 33, 99]

Now we're going to compare 3 to 48, 5, 33, and 99.

Then we start with 10 (our third item) now. Things move on like this until every value is in its place.

We iterate multiple times and compare each item, swapping them as we go.

### Bubble Sort - Time Complexity:

Best Case: items already sorted -- O(n)
    We still have to loop through the array at least once - but we don't really consider execution of both loops because there isn't anything done in that inner loop

Average Case: items in random order -- O(n^2)

Worst Case: items sorted in wrong order (reverse from intended) -- O(n^2)
    We have to do all the work in every loop


### Quicksort - Theory

Uses recursion

Use **pivot elements to split array** into smaller chunks -- elements **bigger, smaller, and equal than the pivot element.** **Repeat** that process for all chunks and concat the sorted chunks.

You pick a pivot element: the first element in the array. You then create some chunks:

    - Smaller Chunk
    - Equal (center) chunk
    - Larget Chunk

You'll then put the pivot element into the center chunk along with any elements of the same value, and then put the rest of the elements in their corresponding "chunk". So this way, you put anything larger than the pivot value into the larger chunk, and anything smaller into the smaller chunk.

You then do this again, picking a new pivot element and creating three new chunks. Remember that each "chunk" is an array, so we would pick a pivot element for each of our existing chunks and place them in a new one accordingly. If you have only one element in any of our original chunks, they stay where they are and are compared to our new chunks.


### Quicksort - Time Complexity:

Best Case: Items are sorted randomly - NOT in right or wrong order -- O(n * log n)

Average Case: Pretty much the same as best case. So we're going to have O(n * log n)

Worst Case: Items are already sorted (order does not matter) - this will lead us to having all our items in our bigger items array or chunk, and we will end up with -- O(n^2).

Why? *In our best case we have n * log n because we're splitting our problem into smaller problems. If the array is already sorted, since we're always taking the first element as a pivot element, we effectively never split the problem. We go through the array multiple times with a loop inside a nested function call*

**How do we derive O(n * log n)?** Go back to the notes on the Master Theorem: the steps for deriving the time complexity of recursive functions.

### Merge Sort - Theory:

Quicksort is better than bubble sort, but we still have quadratic time complexity in our worst case.

Merge sort:

**Split array multiple times** until we have only **2-element arrays** left -- we then sort those arrays and **merge them back together**.

We will do this recursively.

We always start by splitting down the middle.

In each two-element array, we sort the items only within that two-element array.

We merge them with some extra logic where things end up in the right order - we don't just concatenate them without ordering them.

### Merge Sort - Time Complexity:

Best Case: O(n * log n)
Average Case: O(n * log n)
Worst Case: O(n * log n)

Because of the way we split the arrays, we ALWAYS have the same time complexity with this algorithm. 
