// 1. completing the loop for every element
// 2. for each value execute the function which you doing
// 3. Create an array for each output after execution and put it in a variable
const numbers = [1, 2, 3, 4, 5];
const output = numbers.map(x => x * 2);
console.log(output);

const numbers2 = [2, 3, 4];
const output2 = numbers2.map(x => x * x);
console.log(output2);

// More Practice
const friends = ['Jubair', 'Ahmed', 'Junjun', 'Sayem', 'Mohammad', 'Rakib'];
const friendLength = friends.map(friend => friend.length);
console.log(friendLength);

const info = [
    {name: 'Jubair', salary: 25000},
    {name: 'Sayem', salary: 50000},
    {name: 'Ahmed', salary: 75000}
];
const employeeName = info.map(information => information.name);
const employeeSalary = info.map(information => information.salary);
console.log(employeeName);
console.log(employeeSalary);
// info.map(information => console.log(information));