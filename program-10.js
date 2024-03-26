// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  calcTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calcTotalPrice(quantity) {
    const totalPrice = super.calcTotalPrice(quantity);
    return totalPrice + totalPrice * 0.1 * this.warrantyPeriod;
  }
}

const product = new PersonalCareProduct("P-1", "Toothbrush", 20, 1);

console.log(
  `Product Id: ${product.productId}, Product Name: ${product.name}, Price: ${
    product.price
  }, Warranty : ${product.warrantyPeriod + " " + "Year"}`
);

const totalPrice = product.calcTotalPrice(2);

console.log(`₹ ${totalPrice}`);
