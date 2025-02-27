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

// Exercise 5
function copySorted(arr) {
  return arr.slice().sort();
}

// Exercise 6
function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.calculate = function(str) {
    let [operand1, operator, operand2] = str.split(' ');
    let a = +operand1;
    let b = +operand2;

    if (isNaN(a) || isNaN(b) || !(operator in this.methods)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}

// Exercise 7
let names = users.map(user => user.name);

// Exercise 8
let userMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}))

// Exercise 9
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

// Exercise 10
function getAverageAge(users) {
  return (users.reduce((sum, user) => sum + user.age, 0)) / users.length;
}

// Exercise 11
function unique(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}