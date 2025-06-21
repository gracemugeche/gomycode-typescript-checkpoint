// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Vehicle interface with a class called Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // The start method logs a custom message to the console
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);

// Call the start method
myCar.start(); // Output: Car engine started
