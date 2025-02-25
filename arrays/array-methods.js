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