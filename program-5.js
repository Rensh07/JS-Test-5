// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  area() {
    throw new Error("Method 'calcArea()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return 0.5 * this.base * this.height;
  }
}

// Circle
const circle = new Circle(5);
console.log(`Circle area: ${circle.calcArea()}`);

// Triangle
const triangle = new Triangle(6, 8);
console.log(`Triangle area: ${triangle.calcArea()}`);
