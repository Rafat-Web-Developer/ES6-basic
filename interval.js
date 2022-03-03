console.log("first");
console.log("second");
console.log("third");

// setInterval(()=>{
//     console.log("Interval is working.");
// });

// setInterval(()=>{
//     console.log("Interval is working.");
// }, 1000);

// let count = 0;
// const time = setInterval(()=>{
//     console.log(count++);
// }, 1000);

let count = 0;
const time = setInterval(()=>{
    console.log(++count);
    if(count === 15){
        clearInterval(time);
    }
}, 500);

console.log("forth");
console.log("fifth");