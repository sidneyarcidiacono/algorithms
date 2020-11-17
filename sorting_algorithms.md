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
