//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcRectArea() {
    return this.width * this.height;
  }

  calcRectPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const ans = new Rectangle(5, 7);

console.log(ans.calcRectArea());
console.log(ans.calcRectPerimeter());
