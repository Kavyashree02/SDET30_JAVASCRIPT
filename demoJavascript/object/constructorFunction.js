// function Car() {
//     this.brand = "TOYOTA"
//     this.model = "Fortuner"
//     this.spec = [2.2,"xBHP", "YNM"]
// }

// var c1 = new Car()
// console.log(c1.spec);

//other way
function Car(brand,model,spec) {
    this.brand = brand
    this.model = model
    this.spec = spec
}

//to modify the constructor function
//Car.prototype.seatCapacity = 5

var c1 = new Car("TOYOTA", "Fortuner", [2.2,"xBHP", "YNM"])
c1.seatCapacity=7
console.log(c1.seatCapacity); 
var c2 = new Car("SUZUKI", "Grand vitara", [9,8,7])
//console.log(c2.seatCapacity=3);
console.log(c2.brand);
console.log(c1.spec); 



