
// //--Old system--//
// function add(a, b){
//     return a+b;
// }

// console.log(add(5, 2));

// //--Old system output NaN when you don't pass any parameter--//
// function add(a, b){
//     return a+b;
// }

// console.log(add(5));

// //--Old system solution to solve without passing parameter value--//
// function add(a, b){
//     // b = b || 0;
//     if(b == undefined){
//         b = 0; 
//     }
//     return a+b;
// }

// console.log(add(5));

// //--New system for call a function and passing parameter.--//
function add(a, b = 0){
    return a + b;
}
console.log(add(5));

function multiplication(a, b = 1){
    return a * b;
}
console.log(multiplication(5, 2));