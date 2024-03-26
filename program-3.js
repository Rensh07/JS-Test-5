// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoor) {
    super(make, model, year);
    this.numDoor = numDoor;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Number of doors: ${this.numDoor}`);
  }
}

const car = new Car("Toyota", "Supra", 2023, 2);

car.displayDetails();
