"use strict";
// Implement the Vehicle interface with a class called Car
class Car {
    // Constructor to initialize make, model, and year
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // The start method logs a custom message to the console
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method
myCar.start(); // Output: Car engine started
