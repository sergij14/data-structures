////////////////////////////////////////////////////////////////////////

// Binary search
// array needs to be sorted.
// we find median and compare it to the element we are looking for
// if element was not found, we take the half in which element must be
// we have a new list and repeat the process

// we are splitting array on every step

// 0 (log n) - because we split the array on every step
// we are splitting the problem on every iteration

export function binarySearch(arr: number[], el: number) {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  // Iterate while start not meets end
  while (startIdx <= endIdx) {
    // Find the mid index
    let mid = Math.floor((startIdx + endIdx) / 2);

    // If element is present at mid, return True
    if (arr[mid] === el) {
      return mid;
    }

    if (arr[mid] < el) {
      // Else look in left or right half accordingly
      startIdx = mid + 1;
    } else {
      endIdx = mid - 1;
    }
  }

  return null;
}
