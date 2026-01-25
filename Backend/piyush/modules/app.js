const { add, sub } = require("./add");

console.log(`Result after addition: `, add(6, 14));
console.log(`Result after subtraction: `, sub(100, 1));

// other way
const calc = require("./add");

console.log(`addition result:`, calc.add(50, 20));
console.log(`subtraction result:`, calc.sub(50, 20));
