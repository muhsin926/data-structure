// Merges two already sorted arrays

const merge = (left, right) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) results.push(right[j++]);
    else results.push(left[i++]);
  }
  while (i < left.length) results.push(left[i++]);
  while (j < right.length) results.push(right[j++]);
  return results;
};

// Merge Sort

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 72, 1]));
