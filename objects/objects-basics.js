// Exercise 1
let user = {
  name: 'John',
  surname: 'Smith',
}

user.name = 'Pete';
delete user.name;

// Exercise 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Exercise 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
  return sum;
}

// Exercise 4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

// Exercise 5
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

const catName = cat.name;
cat.greeting();
cat.color = 'black';

// Exercise 6
let bandInfo;

const band = {
  name: 'Echo',
  nationality: 'Taiwan',
  genre: 'indie rock',
  members: 5,
  formed: 1999,
  split: false,
  albums: [
    {name: 'Bastille Day', released: 2007},
    {name: 'Day1', released: 2011},
  ]
}

bandInfo = `${band.name} is an ${band.genre} band from ${band.nationality} formed in ${band.formed}.
Their album ${band.albums[0].name} was released on ${band.albums[0].released}.`;

// Exercise 7
function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    console.log(`Hello, said ${this.name} from ${this.breed}.`);
  }
}

// Exercise 8