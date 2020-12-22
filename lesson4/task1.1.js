'use strict';

/**
 * Функция конструктор 
 * @param {string} name 
 * @param {number} price 
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

/**
 * метод Product`a для получения скидки 
 * из свойства собраного объекта 
 */

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const product1 = new Product('sugar', 500);
product1.make25PercentDiscount();

console.log (product1)


//ssugar
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

const product1 = new Product('sugar', 500);
product1.make25PercentDiscount();

console.log(product1);