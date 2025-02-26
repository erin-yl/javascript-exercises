// Exercise 1
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

// Exercise 2
function filterRange(arr, a, b) {
  return arr.filter(el => (el >= a && el <= b));
}

// Exercise 3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if (el < a || el > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Exercise 4
arr.sort((a, b) => b - a);