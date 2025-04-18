// Exercise 1
let head = {
  glasses: 1
};

let table = {
  pen: 3
};
Object.setPrototypeOf(table, head);

let bed = {
  sheet: 1,
  pillow: 2
};
Object.setPrototypeOf(bed, table);

let pockets = {
  money: 2000
};
Object.setPrototypeOf(pockets, bed);

// Exercise 2
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food]; // Assign new array to avoid prototype sharing
  }
};

let speedy = {};
Object.setPrototypeOf(speedy, hamster);

let lazy = {};
Object.setPrototypeOf(lazy, hamster);