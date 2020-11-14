# Search Algorithms

## What are search algorithms all about?

Finding things - efficiently.

We're going to be looking at:

**Linear Search**

**Binary Search**

the **master theorem** for tracking time complexity of recursive algorithms.


### Search Algorithms:

#### Introducing Linear Search:

Linear search looks at every element in the array, and the first time you see the item you're looking for, returns that value or the index of the value.

Works on ordered or unordered lists.

**Time Complexity**:

Best Case: item we're looking for is first in the list, O(1)
Average Case: item we're looking for is somewhere in the middle O(n)
Worst Case: item we're looking for is very last in the list, O(n)

JavaScript has this method built in, actually. Its find() method will find and return the element you're looking for and findIndex will find and return the index of the element you're looking for.

#### Binary Search:

While linear search works on both ordered and unordered lists, *binary search* only works on sorted lists.

You'll need to sort the list first! This means, even though binary search performs better than linear search, if you have an unordered list and need to sort it first, it might mitigate this benefit.

1. Find the median (or closest to it), and compare it to the element you're trying to find: is it the item you're looking for?
2. If not, take the half of the list in which the item we're looking for must be inside
    - to do this, you check if the item you're looking for is > or < than the median value
3. Now, we take this half as a new list, and then perform the same steps on the new list.

Because we're splitting this in half each time, we're able to do better than linear time complexity.

**Time Complexity**:

Best Case: item we're looking for is right in the middle O(1)
Average Case: item we're looking for is somewhere random that we don't know O(log n)
Worst Case: item we're looking for is at the beginning or the end O(log n) (because we're splitting our array in half each time we iterate)
