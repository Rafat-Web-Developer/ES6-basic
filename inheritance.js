class Product {
    productCategory;
    name;
    price;
    constructor(getProductCategory, getName, getPrice){
        this.productCategory = getProductCategory;
        this.name = getName;
        this.price = getPrice;
    }
};

class ComputerProduct extends Product{
    work(){
        console.log(`Price of ${this.name} is ${this.price}.`);
    };
};

class MobilePhone extends Product{
    location;
    constructor(productCategory, name, price, getLocation){
        super(productCategory, name, price);
        this.location = getLocation;
    }
    work(){
        console.log(`Price of ${this.name} is ${this.price}.`);
    }
}

const printer = new ComputerProduct('Computer', "Printer", 12000);
const mouse = new ComputerProduct('Computer', "Mouse", 300);
const mobilePhone = new MobilePhone('Mobile', 'Huawei Nova 3i', 24000, 'Bangladesh');
console.log(printer);
console.log(mouse);
console.log(mobilePhone);