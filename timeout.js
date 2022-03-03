console.log("first");
console.log("second");
console.log("third");
// setTimeout(()=>{
//     console.log(`Set time out is working after execution of all single statement. Set time out working asynchronously. But javascript is a single-threaded language. It's create a queue for waiting all asynchronous steps. If all synchronous step is done then, this asynchronous functions are execute from queue.`);
//  });


// we can use second parameter for set delay and it's use milliseconds
setTimeout(()=>{
    console.log(`Set time out is working after execution of all single statement. Set time out working asynchronously. But javascript is a single-threaded language. It's create a queue for waiting all asynchronous steps. If all synchronous step is done then, this asynchronous functions are execute from queue.`);
 }, 5000);
console.log("forth");
console.log("fifth");