class Product {
    productCategory;
    constructor(getProductCategory){
        this.productCategory = getProductCategory;
    }
};

class ComputerProduct extends Product{
    name;
    price;
    constructor(productCategory, getName, getPrice){
        super(productCategory);
        this.name = getName;
        this.price = getPrice;
    }
    work(){
        console.log(`Price of ${this.name} is ${this.price}.`);
    };
};

class MobilePhone extends Product{
    name;
    price;
    constructor(productCategory, getName, getPrice){
        super(productCategory);
        this.name = getName;
        this.price = getPrice;
    }
    work(){
        console.log(`Price of ${this.name} is ${this.price}.`);
    }
}

const printer = new ComputerProduct('Computer', "Printer", 12000);
const mouse = new ComputerProduct('Computer', "Mouse", 300);
const mobilePhone = new MobilePhone('Mobile', 'Huawei Nova 3i', 24000);
console.log(printer);
console.log(mouse);
console.log(mobilePhone);