class Printer {
    name;
    serial;
    constructor(getName, getSerial){
        this.name = getName;
        this.serial = getSerial;
    }
    startWork(printerName){
        console.log(`Done by ${printerName}`);
    };
};

const printer1 = new Printer("asus", 1);
const printer2 = new Printer("hp", 2);
console.log(printer1);
console.log(printer2);