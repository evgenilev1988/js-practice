// Inheritance in Javascript
var veh = function Vehicle(options) {
  this.company = options.company;
  this.year = options.year;
}

veh.prototype = {
  print:function()
  {
    console.log('Vehicle Test');
  }
}

function Car(args) {
  veh.apply(this, args);
  this.type = "Car";
}

// subclass extends superclass
Car.prototype = Object.create(veh.prototype);

Car.prototype = {
  // Override the test function that is in the Vehicle class
  print:function()
  {
    console.log('Car Test');
  }
}

// We send the object as an array, because we use apply in order to send it to the parent class)
var car = new Car([{ name: "Ferrari",company:"big comapany",year:2000}]);
console.log(car);
car.print();
// End Inheritance in Javascript
