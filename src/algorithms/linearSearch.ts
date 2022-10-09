// Linear Search
// checks every element in the array, first time sees value, returns it
// works on sorted and unsorted lists

// 0(n) - in the worst case we have to visit all of the items
export function linearSearch(arr: number[], el: number) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] == el) {
      return idx;
    }
    return null;
  }
}

////////////////////////////////////////////////////////////////////////
