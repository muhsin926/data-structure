const selectionSort = (array) => {
  const n = array.length;
  let i, j;
  for (i = 0; i < n; i++) {
    let swaping = false;
    let smallest = array[i];
    for (j = i + 1; j < n; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        array[j] = array[i];
        array[i] = smallest;
        swaping = true;
      }
    }
    if (swaping == false) {
      break;
    }
  }
  return array;
};

const arr = [20, 70, 59, 40, 60, 10];
const result = selectionSort(arr);
result.forEach((element) => console.log(element))

