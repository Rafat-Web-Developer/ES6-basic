const add = (a, b, getDisplay, name) => {
    const x = a + b;
    getDisplay(x, name);
}
const display = (x, name) => console.log(`x = ${x} by ${name}`);
add(2, 3, display, "Rafat");
add(5, 8, display, "Hossain");


