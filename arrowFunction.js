// //--system 1--// 
const add = (a, b) => a + b;
console.log(add(5, 2));

// //--system 2--// 
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));

// //--system 3--// 
const multiplyByTwo = (a) => a * 2;
console.log(multiplyByTwo(5));

// //--system 4--// 
const multiplyByFive = a => a * 5;
console.log(multiplyByFive(2));

// //--system 5--// 
const multiLine= (a, b, c) => {
    const r1 = a * b;
    const r2 = r1 + c;
    return r2;
};
console.log(multiLine(5, 3, 2));

const information = info => {
    const fName = info.fName;
    const lName = info.lName;
    const email = info.email;
    const string = `My Name is ${fName} ${lName}. My email address is ${email}.`
    return string;
}
const info = {
    fName : 'Rafat',
    lName : 'Hossain',
    email : 'rafatcse86@gmail.com'
};
const result = information(info);
console.log(result);