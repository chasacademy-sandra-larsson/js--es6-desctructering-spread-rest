// Exercise 1a: Destructuring Objects
const person = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

// Use destructuring to extract properties into separate variables
const { name, age, address } = person;
console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);

// Exercise 2a: Destructuring Arrays
const colors = ["red", "green", "blue"];

// Assign each color to separate variables
const [color1, color2, color3] = colors;
console.log(color1, color2, color3);

// Exercise 3a: Spread Operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

// Combine arrays using the spread operator
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);

// Exercise 4a: Rest Operator
// Create a function that accepts a variable number of arguments and sums them
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Exercise 5a: Destructuring Nested Objects
const user = {
  id: 1,
  info: {
    name: "John",
    email: "john@example.com",
  },
};

// Extract properties from a nested object
const { id, info: { name, email } } = user;
console.log(`User ID: ${id}, Name: ${name}, Email: ${email}`);

// Exercise 6a: Destructuring Nested Arrays
const teams = [
  { name: "Team A", players: ["Player 1", "Player 2"] },
  { name: "Team B", players: ["Player 3", "Player 4"] },
];

// Extract properties from a nested array
const [{ name: teamName, players: [player1, player2] }] = teams;
console.log(`Team Name: ${teamName}`);
console.log(`Players: ${player1}, ${player2}`);

// Exercise 7a: Destructuring Function Parameters
// Create a function that calculates the area of a rectangle using destructuring
function calculateRectangleArea({ width, height }) {
  return width * height;
}

const rectangle = { width: 10, height: 5 };
console.log(`Area: ${calculateRectangleArea(rectangle)}`);

// Exercise 8a: Rest Operator in Object Destructuring
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  pages: 180,
};

// Use object destructuring with the rest operator to capture remaining properties
const { title, ...bookInfo } = book;
console.log(`Title: ${title}`);
console.log("Book Info:", bookInfo);
