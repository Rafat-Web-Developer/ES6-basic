const phonesInformation = {
    totalNumberOfPhone: 4,
    category1: {
        brand: 'Huawei',
        name: 'Nova 3i',
        price: 20000
    },
    category2: {
        brand: 'Samsung',
        name: 'J2',
        price: 10000
    },
    category3: {
        brand: 'Huawei',
        name: 'P30',
        price: 120000
    },
    category4: {
        brand: 'Apple',
        name: 'Iphone 12',
        price: 150000
    }
};

const { name, price } = phonesInformation.category1;
console.log(`My phone name is ${name} and it's price is ${price}.`);

const friends = ['Jubair', 'Fahim', 'Sayem'];
const [ f1, f2, f3 ] = friends;
console.log(`My first friend name is ${f1}. My Second friend name is ${f2}. And my third friend name is ${f3}.`);