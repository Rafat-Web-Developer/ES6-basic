const counter = () => {
    let counter = 0;
    return function(){
        return counter++;
    };
}

let a1 = counter();
let a2 = counter();
console.log(`a1 = ${a1()}`);
console.log(`a1 = ${a1()}`);
console.log(`a1 = ${a1()}`);
console.log(`a2 = ${a2()}`);
console.log(`a2 = ${a2()}`);
console.log(`a1 = ${a1()}`);
console.log(`a2 = ${a2()}`);